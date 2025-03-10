import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const About = () => {


  const teamMembers = [
    { name: "Sateesh Kushwaha", role: "Director & Founder", img: "sk.png" },
    { name: "Shivam Patel", role: "Lead Developer", img: "shivam.png.jpg" },
    
  ];
  


  return (
    <div className="bg-gradient-to-r mt-10 from-purple-700 to-blue-600 min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-white py-16 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">About Us</h1>
        <p className="mt-3 text-lg">Learn more about our mission and values.</p>
      </section>

      {/* Company Info */}
      <section className="max-w-4xl mx-auto py-14 px-6 bg-opacity-20 backdrop-blur-lg shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-white text-center border-b-4 border-blue-400 pb-2">
          Who We Are
        </h2>
        <p className="mt-6 text-gray-200 text-center leading-relaxed">
          We are a team of passionate developers dedicated to creating
          high-quality web applications. Our mission is to build innovative and
          user-friendly solutions that make a difference.
        </p>
      </section>

      <section className="py-14 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Meet Our Team</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="w-full max-w-lg mx-auto"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center border-t-4 border-purple-500 transform hover:scale-105 transition duration-300">
              <img src={member.img} alt={member.name} className="w-40 h-60 mx-auto rounded-full object-cover border-4 border-blue-400 shadow-sm" />
              <h3 className="text-xl font-semibold mt-4 text-white">{member.name}</h3>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

      {/* Call to Action */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl font-bold">Join Us</h2>
        <p className="mt-3 text-lg">
          Be a part of our journey to create amazing experiences.
        </p>
        <a
          href="/Contact"
          className="px-8 py-3 bg-white text-indigo-600 mt-5 inline-block font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
