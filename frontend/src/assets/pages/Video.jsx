import React, { useState, useEffect } from 'react';
import Register from './Register';

const Video = () => {
  const [message, setMessage] = useState('');

  function user(name) {
      if (name) {
       setMessage(`Hi ${name}, welcome to your course`.toUpperCase());
      }
  }

  useEffect(() => {
    const name = Register.name;
    user(name); // Call the function correctly
  }, []);

  return (
    <>
     <div className="flex">
      {/* Left Side Menu Card */}
      <div className="w-1/4 p-4 bg-gray-100 shadow-md h-screen">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">Item 1</li>
          <li className="p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">Item 2</li>
          <li className="p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">Item 3</li>
          <li className="p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">Item 4</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <nav className="bg-white p-4 shadow-md mb-6">
          <h1 className="text-2xl font-semibold">About Us</h1>
        </nav>
        <p className="text-gray-700">
          Welcome to our platform! Here, we provide high-quality services to help you achieve your goals.
        </p>
      </div>
    </div>
    </>
  );
};

export default Video;
