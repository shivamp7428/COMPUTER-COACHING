import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useRef  , useState} from "react";
import { gsap } from "gsap";
import { FaLaptopCode, FaChalkboardTeacher, FaAward ,   FaUserTie, FaUsers } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Star } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';




const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

const slides = [
  {
    title: "SK COMPUTER COACHING & INSTITUTE PVT. LTD.",
    image: "f3.png",
  },
  {
    title: "SK COMPUTER COACHING & INSTITUTE PVT. LTD.",
    image: "f6.webp",
  },
  {
    title: "SK COMPUTER COACHING & INSTITUTE PVT. LTD.",
    image: "f2.avif",
  },
  {
    title: "SK COMPUTER COACHING & INSTITUTE PVT. LTD.",
    image: "f5.jpg",
  },
];




const testimonials = [
  {
    text: "Thank you so much for this online training. The training was very clear and well organized with beautiful examples and videos.",
    image: "sateesh2.jpg",
    name: "Sateesh Kushwaha",
    category:"CEO",
    rating:4.5

  },
  {
    text: "Soon I was able to make sure that I could convert my block into a plan. I am very happy with the result.",
    image: "shivam.jpg",
    name:"Shivam Patel",
    category:"Developer",
    rating:5
  },
  {
    text: "After every session with Denise, we are full of energy, ideas and focus. We break through walls and ceilings that previously held us back.",
    image: "sir.jpeg",
    name:"Dharmendra Sir",
    category:"Software Engineer",
    rating:4
  },
  {
    text: "Denise helped me organise my diet. Highly recommend her services!",
    image: "f10.avif",
    name:"Vishal ",
    category:"frontend developer",
    rating:3.5
  },
  {
    text: "I gained so much confidence in my ability to connect and deepen my relationships with people.",
    image: "f11.avif",
    name:"Harish ",
    category:"Web designer",
    rating:4
  },
 
];

const Home = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 });
    gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.3, duration: 0.8 });
    gsap.fromTo(buttonRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, delay: 0.6, duration: 0.5 });
  }, []);

  // carousel 
  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDirection((prev) => (prev === 1 ? -1 : 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

 


  return (
    <>
 

 <div className="relative w-full  m-20 ml-0 mr-0 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[75vh]  "
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-150"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center  md:px-20">
            <h2 className="text-yellow-500 text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            <Typewriter
                  words={[slide.title]} // or use multiple words: ['Hello', 'World', 'React Rocks!']
                   loop={true}
                   cursor
                  cursorStyle="|"
                  typeSpeed={100}
                   deleteSpeed={50}
                  delaySpeed={2000}
                  />
             </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <motion.div
      className="flex brightness-100 flex-col md:flex-row items-center bg-orange-100/20 px-6 py-20"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.5, duration: 2.5 }, // Slow motion effect
        },
      }}
    >
      {/* Left Content */}
      <motion.div
        className="max-w-xl md:ml-45 md:w-1/2 text-center md:text-left"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 2.5 } }, // Slow fade-in
        }}
      >
        <h1 className="text-green-400 hidden md:block text-4xl mb-5">www</h1>
        <p className="text-gray-500 font-light hidden md:block text-lg mt-6">
          Proven strategies backed by science for success.
        </p>
        <h1 className="text-3xl md:text-7xl font-extrabold  md:10 text-gray-600 leading-tight">
          Live life at your <br /> full potential
        </h1>
        <p className="text-gray-500 mt-10 text-lg font-extralight leading-relaxed">
          I help people discover their true potential and live a fulfilling life.
          Learn the simple 3-step method I found to hack productivity. It just
          works—backed by science. Ready to transform your life?
        </p>

        {/* Button (Visible on Large Screens) */}
        <motion.button
          className="mt-10 hidden md:inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/Contact"
            className="text-white bg-green-600 rounded-2xl font-bold text-xl px-6 py-3"
          >
            Get Contact
          </a>
        </motion.button>
      </motion.div>

      {/* Right Content - Image & Overlay */}
      <motion.div className="md:ml-20 mt-15 md:mt-0 relative">
  <img
    src="a1.jpg"
    alt="Coaching"
    className="md:w-100 md:h-150 mt-10 md:mt-0 md:ml-35 brightness-50"
  />

  
  <motion.div
    className="absolute top-0 md:left-10 w-63 bg-white p-6 md:shadow-2xl shadow-2xs flex rounded-lg z-10 transform -translate-y-1/2"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2.5 }}
  >
    <AiOutlineClockCircle className="text-5xl text-green-500 mr-4" />
    <div>
      <h1 className="text-xl font-bold">100%</h1>
      <p className="text-sm">Success rate this year</p>
    </div>
  </motion.div>
</motion.div>

      {/* Button (Visible on Mobile) */}
      <motion.button
        className="mt-10 block md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="/Contact"
          className="text-white bg-green-600 rounded-2xl font-bold text-xl px-6 py-3"
        >
          Get Contact
        </a>
      </motion.button>
    </motion.div>



<h1 className="text-gray-600 text-4xl ml-45 mt-20 hidden md:block ">WWW</h1>
<motion.div
  className="flex flex-wrap  justify-center items-start mt-10 px-6"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, staggerChildren: 0.5 }, // Slow motion effect
    },
  }}
>
  {/* Left Section - Heading */}
  <motion.div
    className="lg:ml-40 text-center hidden md:block sm:text-left"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Slow fade-in
    }}
  >
    <h1 className="text-6xl font-extrabold text-gray-600 leading-tight sm:text-3xl">
      I can help you in these <br /> particular areas.
    </h1>
  </motion.div>

  {/* Right Section - Coaching Description */}
  <motion.div
    className="lg:ml-40 hidden md:block max-w-xl"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Slow motion
    }}
  >
    <p className="text-gray-500 text-lg font-extralight leading-relaxed">
      Whether you're a beginner looking to understand computer basics or an advanced learner aiming to master coding, our coaching is tailored to meet your needs. We provide hands-on training in software tools, programming languages, web development, and more.
    </p>
    <p className="text-gray-500 mt-10 text-lg font-extralight leading-relaxed">
      Our experienced mentors guide you through real-world projects and help build a strong foundation in logic, problem-solving, and technology. Join us to unlock career opportunities in IT, boost your confidence, and stay ahead in the digital age.
    </p>
  </motion.div>
</motion.div>



<div className="flex flex-wrap justify-center gap-10 md:mt-20 m-5">
      {[
        {
          icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
          title: "1:1 Coaching",
          desc: "Get personalized one-on-one coaching to help you achieve your goals with tailored strategies and actionable insights.",
        },
        {
          icon: <FaUserTie className="text-4xl text-purple-500" />,
          title: "Consultation",
          desc: "Schedule a professional consultation to discuss your challenges and explore effective solutions for personal or business growth.",
        },
        {
          icon: <FaUsers className="text-4xl text-green-500" />,
          title: "Group Coaching Sessions",
          desc: "Join a dynamic group coaching session to gain insights, motivation, and accountability from a supportive community.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="border w-80 p-8 h-auto hover:scale-105 transition-transform border-gray-300 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {service.icon}
          <h1 className="font-bold mt-5 text-xl">{service.title}</h1>
          <p className="font-light mt-4 text-gray-600">{service.desc}</p>
        </motion.div>
      ))}
    </div>

<div className="text-center m-10  ">
  <a href="/Services" className="font-bold text-white bg-green-500 p-4 rounded-xl ">All Services </a>
</div>

<div className="bg-orange-100/20 m-5 p-5 md:m-10 md:p-10 rounded-lg">
<motion.div
        className="ml-5 md:ml-10 text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-green-700 text-xl hidden md:block md:text-2xl">WWW</h1>
        <h1 className="text-2xl md:text-5xl font-extrabold mt-5">
          Hear out what my <br className="hidden md:block" /> clients say about me.
        </h1>
      </motion.div>

      <div className="relative w-full overflow-hidden mt-10 p-4">
        <motion.div
          className="flex space-x-6 md:justify-center"
          animate={{ x: [0, -200, -400, 0] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-4 md:p-6 min-w-[250px] md:min-w-[280px] max-w-xs bg-gradient-to-r from-blue-50 to-gray-100 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.3 }}
            >
              <h1 className="text-md md:text-lg font-semibold italic text-center text-gray-800">"{testimonial.text}"</h1>
              <div className="mt-4 flex flex-col items-center space-y-2">
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-blue-300 shadow-md"
                />
                <div className="text-center">
                  <p className="text-sm md:text-base font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.category}</p>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-3 h-3 md:w-4 md:h-4 ${index < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                        fill={index < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

<div>
   <div className="text-center m-10">
    <motion.h1
      className="md:text-5xl text-2xl font-extrabold text-gray-800 sm:text-3xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Stay Motivated, read the <br className="hidden md:block"/> weekly blog articles.
    </motion.h1>
  </div>
  
  <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center m-4 md:m-10"
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
  {[
    {
      img: "a2.avif",
      title: "Balancing your work and knowledge.",
      desc: "Learning computer tools like DCA, PGDCA, or PTPC can open doors to endless career opportunities. Start your journey with structured lessons that help you build a solid foundation and advance your coding skills."
    },
    {
      img: "a3.jpg",
      title: "A short break from Social Media is important.",
      desc: "Whether you're looking to create a personal account or develop complex web applications, our coaching will teach you essential technologies like DCA, PGDCA, PTPC, and frameworks to bring your ideas to life."
    },
    {
      img: "a4.webp",
      title: "How to be 1% Better Every Day",
      desc: "Learn how to build software platforms from scratch! From planning and design to software deployment, we provide hands-on coaching to help you bring your computing projects to fruition."
    }
  ].map((item, index) => (
    <motion.div
      key={index}
      className="max-w-md border border-gray-300 flex flex-col items-center p-4 sm:w-full bg-white "
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img src={item.img} alt="" className="mb-4 h-40 w-full object-cover rounded-md" />
      <h1 className="font-bold text-center text-lg">{item.title}</h1>
      <p className="font-light text-center px-4">{item.desc}</p>
    </motion.div>
  ))}
</motion.div>

</div>




    <div className="bg-gray-900 text-white ">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[60vh] text-center md:p-10">
        <h1 ref={titleRef} className="md:text-5xl text-xl font-bold text-blue-400">Unlock Your Computer Potential</h1>
        <p ref={textRef} className="mt-4 text-lg max-w-2xl">
          Join our computer coaching  and master PGDCA, DCA, and tally with expert guidance.
        </p>
        <button
          ref={buttonRef}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-lg px-6 py-2 rounded-lg font-semibold"
        >
        <a href="/Payment">Online Addmission</a>
        </button>
      </div>

      {/* Features Section */}
      <div className="py-16 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {features2.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          {feature.icon}
          <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
          <p className="mt-2">{feature.description}</p>
        </motion.div>
      ))}
    </div>
    </div>

    <div className=" bg-gray-100">
      
      {/* Features Section */}
      <div className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white shadow-lg rounded-2xl text-center"
          >
            <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

<div className=" p-10 min-h-[60vh] flex flex-col md:flex-row items-center justify-around">
  <div className="text-center md:text-left ">
    <h1 className="md:text-5xl text-2xl  font-bold">
      Register in <b className="text-orange-300">SK Coaching</b>
    </h1>
    <p className="md:mt-15 mt-10  text-lg">
      Start Y   our Journey In The Best Computer Training Coaching.<br /> 
      <p className="hidden md:block">Limited seats available – Enroll Now! </p>
    </p>
    <a href="/Register">
      <button className="md:mt-16 mt-6 hidden md:block animate-pulse  ml-[-1.5vh] px-6 py-3 text-2xl bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-500 transition">
        Register Now
      </button>
    </a>
  </div>

  <div className="  items-center mt-6  ">
    <img
      src="f8.webp"
      alt="Register Now"
      className="md:w-150 md:h-96    border-white   transition duration-300"
    />
  </div>
  <a href="/Register">
      <button className="md:mt-16 mt-6 md:hidden block  animate-pulse  ml-[-1.5vh] px-6 py-3 text-2xl bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-500 transition">
        Register Now
      </button>
    </a>
</div>
 </>
  );
};
const features = [
  {
    title: "Expert Tutors",
    description: "Learn from industry experts with years of experience in teaching.",
    icon: "📚",
  },
  {
    title: "Interactive Sessions",
    description: "Live and recorded classes with Q&A support.",
    icon: "🎥",
  },
  {
    title: "Comprehensive Materials",
    description: "Get access to premium study materials and e-books.",
    icon: "📖",
  },
  {
    title: "Flexible Schedule",
    description: "Choose time slots that fit your schedule.",
    icon: "⏰",
  },
];

const features2 = [
  {
    icon: <FaLaptopCode className="text-blue-400 text-4xl mx-auto" />,
    title: "Hands-on Computer",
    description: "Practical Computer sessions to build real-world skills.",
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-400 text-4xl mx-auto" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience.",
  },
  {
    icon: <FaAward className="text-blue-400 text-4xl mx-auto" />,
    title: "Certifications",
    description: "Get certified and boost your career opportunities.",
  },
];

export default Home;
