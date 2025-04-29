import bcrypt from "bcryptjs";
import useModel from "../model/useModel.js";
import OTPVerification from "../model/EmailOtp.js";
import jwt from "jsonwebtoken";

export const verifyOTPAndRegister = async (req, res) => {
  try {
    const { Name, Email, Password, Mobile, otp } = req.body;

    if (!Name || !Email || !Password || !Mobile || !otp) {
      return res.status(400).send({ success: false, message: "All fields are required" });
    }

    const otpRecord = await OTPVerification.findOne({ email: Email });

    if (!otpRecord) {
      return res.status(400).send({ success: false, message: "No OTP found for this email" });
    }

    const now = new Date();
    const expiresAt = new Date(otpRecord.expiresAt);
    console.log("⏰ Now:", now.toISOString(), "| OTP Expires At:", expiresAt.toISOString());
// expire date
    if (now > expiresAt) {
      return res.status(400).send({ success: false, message: "OTP has expired" });
    }
// otp match
   
    if (otpRecord.otp !== otp) {
      return res.status(400).send({ success: false, message: "Invalid OTP" });
    }

// find user
    const existingUser = await useModel.findOne({ Email });
    if (existingUser) {
      return res.status(400).send({ success: false, message: "You are already exists" });
    }
// hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(Password, salt);
// new user create
    const newUser = await useModel.create({ Name, Email, Password: hashPassword, Mobile, });

    await OTPVerification.deleteOne({ email: Email });
//access token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: { id: newUser._id, name: newUser.Name, email: newUser.Email, mobile: newUser.Mobile, role: newUser.role, }, token, 
     });


  } catch (error) {
    console.error("OTP verification error:", error);
    return res.status(500).send({ success: false, message: "Server error" });
  }
};
