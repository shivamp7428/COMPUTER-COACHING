import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5001/api/v1/User/login", formData);
    toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: true,
        onClose: () => navigate("/Video") 
      });

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed. Try again.",
        {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: true,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-20 justify-center items-center min-h-screen ">
      <ToastContainer position="top-right" autoClose={3000} />

      <div>
        <img src="f1.png" alt="img" className="m-30 mr-10 hidden md:block h-96" />
      </div>

      <div className="max-w-sm mx-auto m-5 p-6 bg-white space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">Login to your account</h1>
        <p className="text-gray-600">Enter your details below</p>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 p-3 rounded text-white hover:bg-red-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm">
          Don’t have an account?{" "}
          <a href="/Register" className="hover:border-b p-1 ml-2">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
