import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Password: "",
  });

  const [otp, setOtp] = useState(""); // OTP input state
  const [otpSent, setOtpSent] = useState(false); // To track if OTP is sent
  const [isOtpVerified, setIsOtpVerified] = useState(false); // To track OTP verification
  const [emailForOtp, setEmailForOtp] = useState(""); // Store email to verify OTP
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpSent) {
      // First submit, send OTP to the email
      try {
        const response = await axios.post(
          "http://localhost:5001/api/v1/User/Register", // Registration API
          formData
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("OTP sent to your email for verification.");
          setEmailForOtp(formData.Email); // Store email for OTP verification
          setOtpSent(true); // Mark OTP as sent
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        toast.error("Error sending OTP. Please try again.");
        console.error("Error sending OTP:", error.response?.data || error.message);
      }
    } else {
      // OTP verification flow
      try {
        const response = await axios.post(
          "http://localhost:5001/api/v1/User/verify-otp", // OTP verification API
          { email: emailForOtp, otp }
        );

        if (response.status === 200) {
          toast.success("OTP verified successfully!");
          setIsOtpVerified(true); // Mark OTP as verified

          // You can handle further registration steps (e.g., storing user token)
          localStorage.setItem("userName", formData.Name); // Example to store userName

          setTimeout(() => {
            navigate("/Video"); // Redirect after successful OTP verification
          }, 1000);
        } else {
          toast.error("Invalid OTP. Please try again.");
        }
      } catch (error) {
        toast.error("Error verifying OTP. Please try again.");
        console.error("Error verifying OTP:", error.response?.data || error.message);
      }
    }
  };

  return (
    <div className="flex mt-10">
      <div>
        <img src="f1.png" alt="img" className="m-30 mr-10 hidden md:block" />
      </div>

      <div className="max-w-sm mx-auto mt-20 p-6 bg-white space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">
          {otpSent ? "Verify OTP" : "Create an account"}
        </h1>
        <p className="text-black">
          {otpSent ? "Enter OTP to verify your account" : "Enter your details below"}
        </p>

        <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
          {!otpSent && (
            <>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border-b border-gray-400 pl-0 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border-b border-gray-400 pl-0 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full p-3 border-b border-gray-400 pl-0 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 border-b border-gray-400 pl-0 focus:outline-none"
                required
              />
            </>
          )}

          {otpSent && (
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 border-b border-gray-400 pl-0 focus:outline-none focus:border-blue-500"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-red-500 p-3 cursor-pointer rounded text-white mt-5"
          >
            {otpSent ? "Verify OTP" : "Send OTP"}
          </button>
        </form>

        <h1 className="text-center mt-5">
          Already have an account?{" "}
          <a href="/Login" className="hover:border-b p-1 ml-2">
            Log in
          </a>
        </h1>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}
