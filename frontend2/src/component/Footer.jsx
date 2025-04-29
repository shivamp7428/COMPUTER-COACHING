import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <> 
      <footer 
        className="relative  bg-black text-white py-12 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url(a.avif)" }} // Replace with your image URL
      >
        <div className="absolute inset-0  opacity-40"></div> {/* Overlay for better text visibility */}

        <div className="relative max-w-7xl mx-auto md:ml-50 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Section */}
          <div>
            <h3 className="font-extrabold md:text-2xl mb-4  tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li><a href="/About" className="text-gray-300 hover:text-white  transition ">About</a></li>
              <li><a href="/Career" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="/Services" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="/Contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="font-extrabold md:text-2xl mb-4 tracking-wide">Skills</h3>
            <ul className="md:space-y-2 space-y-1">
              <li><a href="https://monkeytype.com/" className="text-gray-300 hover:text-white transition">Typing Master</a></li>
              <li><a href="/course" className="text-gray-300 hover:text-white  transition">Computer Tools</a></li>
              <li><a href="/Course" className="text-gray-300 hover:text-white transition">Course</a></li>
              <li><a href="/Payment" className="text-gray-300 hover:text-white transition">Online Addmission</a></li>

            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-extrabold text-2xl mb-4 tracking-wide">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="http://www.instagram.com" className="text-gray-300 hover:text-white transition">Instagram</a></li>
              <li><a href="http://www.facebook.com" className="text-gray-300 hover:text-white transition">Facebook</a></li>
              <li><a href="http://www.twitter.com" className="text-gray-300 hover:text-white transition">Twitter</a></li>
              <li><a href="https://www.linkedin.com" className="text-gray-300 hover:text-white transition">Linkedin</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-extrabold text-2xl mb-4 tracking-wide">Support</h3>
            <ul className="space-y-2">
              <li><a href="/Help" className="text-gray-300 hover:text-white transition">Help Center</a></li>
              <li><a href="/Privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/Condition" className="text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="relative flex justify-center space-x-4 animate-bounce mt-10">
          <a href="http://www.instagram.com" className="text-blue-400 hover:text-white transition-transform transform hover:scale-110"><FaInstagram size={24} /></a>
          <a href="http://www.facebook.com" className="text-blue-400 hover:text-white transition-transform transform hover:scale-110"><FaFacebookF size={24} /></a>
          <a href="http://www.twitter.com" className="text-blue-400 hover:text-white transition-transform transform hover:scale-110"><FaTwitter size={24} /></a>
          <a href="https://www.linkedin.com" className="text-blue-400 hover:text-white transition-transform transform hover:scale-110"><FaLinkedinIn size={24} /></a>
        </div>

        {/* Footer Bottom */}
        <div className="relative text-center mt-12 text-gray-400 text-sm border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} SK Computer Coaching classes.</p>
          <p className="mt-2 font-semibold text-white cursor-pointer">Created By Shivam Patel</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
