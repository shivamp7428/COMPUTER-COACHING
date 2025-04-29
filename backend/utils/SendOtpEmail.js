import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification - SK Computers Coaching",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Welcome to SK Computers Coaching!</h2>
        <p>Thank you for registering with us. To complete your signup process, please use the One-Time Password (OTP) provided below to verify your email address:</p>
        <div style="font-size: 24px; font-weight: bold; margin: 20px 0; color: #2E86C1;">
          ${otp}
        </div>
        <p>This OTP is valid for the next <strong>10 minutes</strong>. Please do not share this code with anyone for security reasons.</p>
        <p>If you did not request this verification, please ignore this email.</p>
        <br />
        <p>Best regards,<br/>SK Computers Coaching Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendOTPEmail;
