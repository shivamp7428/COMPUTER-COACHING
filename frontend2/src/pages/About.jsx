import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    { name: "Sateesh Kushwaha", role: "Director & Founder", img: "sateesh2.jpg" },
    { name: "Shivam Patel", role: "Lead Developer", img: "shivam.jpg" },
  ];

  const values = [
    { title: "Innovation", description: "Leading the charge in transformative ideas and cutting-edge solutions." },
    { title: "Integrity", description: "Building trust through transparency and honest partnerships." },
    { title: "Impact", description: "Delivering solutions that empower businesses and shape industries." },
  ];

  const techStack = ["DCA", "PGDCA", "ADCA", "DICP", "DPCTT", "Tally"];
  return (
    <div className="bg-white text-gray-900 mt-10 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-8 text-center bg-gray-100">
        <h1 className="md:text-6xl text-3xl font-bold text-indigo-800 leading-tight">Empowering the Future of Technology</h1>
        <p className="mt-4 text-xl max-w-4xl mx-auto text-gray-600">
          At the intersection of innovation and excellence, we’re building solutions that shape tomorrow’s world.
        </p>
        <a
          href="/Register"
          className="mt-8 inline-block text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-8 rounded-lg transition duration-300"
        >
          Get in Touch
        </a>
      </section>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">Who We Are</h2>
        <p className="text-lg text-center text-gray-600 leading-relaxed">
          We are a global technology leader, building scalable solutions that bridge the gap between innovation and functionality. Our mission is to transform industries and empower businesses with state-of-the-art technologies.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {values.map((value, i) => (
            <div key={i} className="bg-white p-10 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">{value.title}</h3>
              <p className="text-lg text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">Meet Our Team</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="w-full max-w-xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-indigo-600">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-26 h-40 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold mt-6 text-indigo-700">{member.name}</h3>
                <p className="text-lg text-gray-500">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-100 py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">Our Technology Stack</h2>
        <p className="text-center text-lg text-gray-600 mb-8">We leverage the latest technologies to solve today's most pressing challenges.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, i) => (
            <span key={i} className="px-6 py-3 bg-indigo-100 text-indigo-700 font-semibold rounded-full shadow-md">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We are committed to creating lasting impact by delivering world-class products and services. Our team of experts is passionate about solving real-world problems with cutting-edge technology and innovation.
        </p>
      </section>
     <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="bg-indigo-200"
           style={{
             
            
             backgroundPosition: "center",
             padding: "50px",
             textAlign: "center",

           }}
         >
           <motion.i 
             className="text-sm  uppercase tracking-wide"
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
           >
             Our Bold Vision
           </motion.i>
           <motion.h1 
             className="md:text-6xl text-2xl font-extrabold mt-4"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.7 }}
           >
             We're The Future Now
           </motion.h1>
           <motion.p 
             className="text-sm mt-6 w-full md:max-w-4xl mx-auto"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.9 }}
           >
             Computers have revolutionized the world. With modern Artificial Intelligence, 
             Cloud Computing, and High-Speed Processing, we can not only process information faster 
             but also make the impossible possible with computer and automation.
           </motion.p>
     
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
             initial="hidden"
             animate="visible"
             variants={{
               hidden: { opacity: 0 },
               visible: {
                 opacity: 1,
                 transition: { staggerChildren: 0.3 },
               },
             }}
           >
             {["AI With Computer", "Cloud Computing", "Super Computing"].map((title, index) => (
               <motion.div 
                 key={index}
                 className="p-5 md:p-6 bg-gray-800 bg-opacity-60 rounded-lg"
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { opacity: 1, y: 0 },
                 }}
               >
                 <h2 className="text-2xl text-white font-bold">{title}</h2>
                 <p className="mt-2 text-sm text-white">
                   {index === 0 && "Artificial Intelligence empowers computers to think and make decisions. It is transforming industries like healthcare, education, and automation, making them more efficient and intelligent."}
                   {index === 1 && "Data storage and processing now happen in the cloud, enabling high-speed access from anywhere in the world with enhanced security and flexibility."}
                   {index === 2 && "With powerful processors and ultra-fast calculations, supercomputing is revolutionizing fields like scientific research, medical advancements, and climate forecasting with unprecedented accuracy."}
                 </p>
               </motion.div>
             ))}
           </motion.div>
         </motion.div>
      {/* Call to Action */}
      <section className="bg-indigo-600 py-20 px-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
        <p className="text-lg mb-8">Be a part of a visionary company that's driving change on a global scale.</p>
        <a
          href="/Contact"
          className="text-lg font-semibold text-indigo-600 bg-white hover:bg-indigo-100 py-3 px-8 rounded-lg transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
