import { useState } from "react";
import { Phone, Mail, Send, User, MessageSquare, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 min-h-screen bg-gradient-to-r from-blue-600 to-indigo-800 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-lg border border-white/30"
      >
        <h2 className="md:text-3xl text-xl font-bold  animate-bounce text-center text-white mb-4">Contact Us</h2>
        <p className="text-center text-gray-200 mb-6">We'd love to hear from you!</p>

        {/* Contact Info */}
        <div className="text-center  mb-6">
          <p className="text-lg font-semibold flex items-center justify-center gap-2 text-white">
            <Phone className="text-yellow-300" size={20} /> Phone:
          </p>
          <p className="text-yellow-300 text-lg font-medium">+91 6232456010</p>
        </div>

        {/* Success Message */}
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center"
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none w-full pl-10 placeholder-gray-300"
              required
            />
            <User className="absolute left-3 top-3 text-gray-300" size={20} />
          </div>

          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none w-full pl-10 placeholder-gray-300"
              required
            />
            <Mail className="absolute left-3 top-3 text-gray-300" size={20} />
          </div>

          <div className="relative">
            <textarea 
              placeholder="Your Message" 
              className="p-3 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none w-full pl-10 placeholder-gray-300"
              rows="4"
              required
            ></textarea>
            <MessageSquare className="absolute left-3 top-3 text-gray-300" size={20} />
          </div>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="bg-yellow-400 text-gray-900 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition"
          >
            <Send size={20} /> Send Message
          </motion.button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-white hover:text-blue-500 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-300 transition">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-pink-400 transition">
            <Instagram size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
