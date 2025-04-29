import express from 'express';
import dotenv from "dotenv";
import passport from 'passport';
import { login,  Register } from '../controller/userController.js';
import transporter from '../confige/mailer.js'; 
import { verifyOTPAndRegister } from "../controller/VerificationOTPEmail.js";
dotenv.config();

const router = express.Router();

router.post("/Register", Register);
router.post("/Login", login);
router.post("/verify-otp", verifyOTPAndRegister);

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New message from ${name}.`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Google OAuth Routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", {
  successRedirect: process.env.CLIENT_URL + "/dashboard",
  failureRedirect: process.env.CLIENT_URL + "/login",
}));

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(process.env.CLIENT_URL);
  });
});

router.get("/getuser", (req, res) => {
  res.send(req.user || null);
});

export default router;
