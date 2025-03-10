import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Mobile: "",
  });

  useEffect(() => {
    let direction = 1; 
    const scrollSpeed = 2; 
    const interval = setInterval(() => {
      window.scrollBy(direction * scrollSpeed, 0);
      if (window.scrollX + window.innerWidth >= document.body.scrollWidth) {
        direction = -1; 
      } else if (window.scrollX <= 0) {
        direction = 1; 
      }
    }, 30); 

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      alert("Please enter a valid email");
      return;
    }
    if (!/^\d{10}$/.test(formData.Mobile)) {
      alert("Invalid mobile number");
      return;
    }
    try {
      const response = await axios.post(  "http://localhost:5000/api/v1/User/Register", formData   );
      console.log("Registration Successfully", response.data);
      alert("Registration Successfully");
    } catch (error) {
      console.error("Registration failed",  error.message);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 mt-20 sm:px-6 bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl animate-bounce sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Register an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="Mobile"
              value={formData.Mobile}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r animate-pulse from-purple-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:opacity-90 transition-all"
          >
            Register Now
          </button>
        </form>
        <p className="mt-3 text-center">
          Have an account? <a href="/Login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
