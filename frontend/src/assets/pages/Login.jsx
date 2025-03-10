import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Email || !/\S+@\S+\.\S+/.test(formData.Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/User/Login",
        formData
      );
      console.log("Login Successful:", response.data);
      alert("Login Successfull");
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen  items-center  justify-center bg-gradient-to-r from-blue-500 to-purple-700 px-4 animate-fade-in">
      <div className="w-full max-w-md bg-white p-8 mt-25s rounded-2xl shadow-xl border border-gray-200 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 animate-bounce">
          Log In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="Email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition duration-300 ease-in-out hover:shadow-md"
              placeholder="Enter your email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              name="Password"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition duration-300 ease-in-out hover:shadow-md"
              placeholder="Enter your password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full animate-pulse bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out font-semibold shadow-md hover:shadow-lg" >
           <a href="/Video"> Log In</a>
          </button>
        </form>
        <p className="mt-3 text-center">Don't have an account? <a href="/Register" className="text-blue-600">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
