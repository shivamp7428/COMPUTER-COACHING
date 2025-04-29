import { useState } from "react";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";  // Import ToastContainer correctly
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields."); // Error toast
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/v1/User/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
        toast.success("✅ Message sent successfully!"); // Success toast
      } else {
        toast.error("Failed to send message: " + data.error); // Error toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!"); // Error toast
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div>
        <img src="f7.svg" alt="img" className="m-20 mr-10 hidden md:block" />
      </div>
      <div className="max-w-sm mt-20 mx-auto m-30 md:mt-30 p-6 bg-white space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        <p>We'd love to hear from you!</p>

        {submitted && (
          <div className="text-green-600 font-semibold">
            ✅ Message sent successfully!
          </div>
        )}

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border-b border-gray-400 pl-10 focus:outline-none focus:border-blue-500"
              required
            />
            <User className="absolute left-3 top-3 text-gray-500" size={20} />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border-b border-gray-400 pl-10 focus:outline-none focus:border-blue-500"
              required
            />
            <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border-b border-gray-400 pl-10 focus:outline-none focus:border-blue-500"
              rows="4"
              required
            ></textarea>
            <MessageSquare className="absolute left-3 top-3 text-gray-500" size={20} />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 p-3 rounded text-white mt-3 hover:bg-blue-600 transition flex justify-center items-center gap-2"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>

      {/* Corrected Toast Container */}
      <ToastContainer />
    </div>
  );
}
