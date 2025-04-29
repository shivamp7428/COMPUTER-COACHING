import useModel from "../model/useModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import OTPVerification from "../model/EmailOtp.js"
import sendOTPEmail  from "../utils/SendOtpEmail.js"

export const Register = async (req, res) => {
  try {
    const { Name, Email, Password, Mobile } = req.body;

    if (!Name || !Email || !Password || !Mobile) {
      return res.status(400).send({ success: false, message: "All fields are required" });
    }

    const existingUser = await useModel.findOne({ Email });
    if (existingUser) {
      return res.status(400).send({ success: false, message: "User already exists" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    //  Create OTP and log timestamps
    const createdOTP = await OTPVerification.create({
      email: Email,
      otp: otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes from now
    });
    console.log("✅ OTP created at:", new Date(), "👉 Expires at:", createdOTP.expiresAt);

    await sendOTPEmail(Email, otp);
   return res.status(200).send({ success: true, message: "OTP sent to your email for verification"});
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).send({ success: false, message: "Server error, please try again later",});
  }
};

export const login = async(req,res)=>{
    try {
         
        const {Email , Password} = req.body;
        if(!Email || !Password){
            return res.status(401).send({success:false , message:"Feild all required"})
        }

        const user = await useModel.findOne({Email})
        if(!user){
            return res.status(401).send({success:false , message:"User Not found"})
        }

        // compare password

        const isMatch = await bcrypt.compare(Password , user.Password)
        if(!isMatch){
            return res.status(401).send({success:false, message:"Invalid information"})
        }
           
        const accesstoken = jwt.sign(
            {id:user._id , role:user.role },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        return res.status(200).send({user , accesstoken})

    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false , message:error.message})
    }
}



