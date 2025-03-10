import { useState, useEffect ,useRef} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const img = [ "a3.webp","a2.webp", "a1.webp", "a4.webp" ,"a5.webp"];

const Home = () => {
const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startImageRotation = () => {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % img.length);
      }, 3000);
    };

    startImageRotation();

    return () => clearInterval(intervalRef.current);
  }, []);



  const [showAll, setShowAll] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "Computer Coaching Classes", text: "You learn computer & study these tools." },
    { title: "SK Provides in Computer Coaching", text: "You trust me & learn again." },
    { title: "Computer Training", text: "This institute provides training for only 350/- rupees per month." },
    { title: "Online Teaching", text: "If you want to learn online, I provide online coaching." }
  ];

  // Function to move slides
  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + slides.length) % slides.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1); // Move to the next slide every 2 seconds
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);




  const images = [
    { src: "f3.png", text: "1. Best teaching" },
    { src: "f2.png", text: "2. Our currency & technology" },
    { src: "f1.png", text: "3. Computer tools & fundamental" },
    { src: "f4.png", text: "4. 👍 Best logic of computer" },
    { src: "f5.png", text: "5. One day go to join this group" },
  ];

 const [index, setIndex] = useState(0);

    const moveSlides = (direction) => {
        setIndex((prev) => (prev + direction + images.length) % images.length);
      };
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <>


<div className="relative w-full  min-h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 mt-20 w-full h-163">
        <AnimatePresence mode="wait">
          <motion.img
            key={img[currentImage]}
            src={img[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover absolute top-0 left-0"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {/* Overlay for Better Text Readability */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen text-center px-4">
        <div className="text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to <strong className="text-green-500">My</strong>
            <b className="text-red-500"> Coaching</b>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-bold text-white drop-shadow-lg">
          Providing top solutions for your programming issues with advanced technology & <br /> compassionate guidance to ensure your success.          </p>
          <button
            className="mt-6 bg-blue-500 animate-pulse hover:bg-blue-700 text-2xl text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
            aria-label="Learn more about My Medical"
          >
            <a href="/Services">Learn More</a>
          </button>
        </div>
     </div>
    </div>



<section className="w-full bg-gradient-to-br from-purple-900 via-blue-700 to-blue-400 text-white flex flex-col md:flex-row items-center justify-center py-10 md:py-16 px-6  shadow-lg">
  
  {/* Left Side - Services Info */}
  <nav className="w-full text-center md:text-left px-6">
    <div className="relative py-6 md:py-8 max-w-3xl mx-auto md:mx-0">
      
      <a href="/Services" className="bg-gradient-to-r animate-bounce from-yellow-400 to-orange-500 text-gray-900 text-lg md:text-xl font-extrabold px-6 py-3 rounded-lg inline-block cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300">
        Our Services
      </a>

      <h1 className="text-white text-xl md:text-4xl font-extrabold mt-4 md:mt-6">
        Exclusive Solutions Crafted for You
      </h1>

   <p className="text-gray-300 text-md md:text-lg mt-3 md:mt-5 px-2 md:px-0 leading-relaxed">
        <p className="hidden md:block">Get access to **premium financial solutions** designed to help you achieve your goals effortlessly.</p> Our expert team ensures a seamless experience tailored to your needs.
      </p>

      <p className="text-gray-300 text-md md:text-lg mt-3 md:mt-5 hidden md:block">
        Join our exclusive classes and transform your financial future today.
      </p>

      <p className="bg-gradient-to-r animate-bounce from-red-500 to-pink-600 text-white text-lg md:text-xl px-6 py-3 rounded-lg inline-block mt-5 md:mt-7 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300 font-bold">
       <a href="/Course"> Explore More</a>
      </p>

    </div>
  </nav>

  {/* Right Side - Sliding Content */}
  <article className="w-full md:w-2/3 flex justify-center mt-8 md:mt-0">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl text-center overflow-hidden border-2 border-gray-300 rounded-2xl shadow-xl bg-gray-900">
        
        {/* Sliding Content */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full px-6 py-6 bg-gray-800 rounded-xl shadow-md">
              <h1 className="text-lg md:text-2xl font-bold text-white">{slide.title}</h1>
              <p className="text-gray-400 mt-2 text-sm md:text-lg">{slide.text}</p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-yellow-400 scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </article>

</section>


<div className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg ">
  
  {/* Left Section - Image & Heading */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
     {/* Title */}
     <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
      Basic Computer Concept 💻
    </h1>
    
    {/* Image with Hover Animation */}
    <img src="computer.png"  alt="Computer"  className="w-72 h-44 md:w-96 md:h-52 m-10 rounded-xl shadow-2xl border-4 border-white-blue hover:scale-105 transition duration-300 " />
    </div>

  {/* Right Section - Content */}
  <div className="w-full md:w-1/2 bg-white/10 p-6 md:p-10 rounded-lg shadow-lg backdrop-blur-md border border-gray-300">
    
    {/* Description */}
    <p className="text-gray-200 md:text-lg leading-relaxed">
      💡 Technology is evolving, and "computer skills" are the foundation of success!. <p className="hidden md:block">Whether you're a student, a working professional, or just curious, this 'comprehensive course' will give you the edge you need</p> 
    </p>

    {/* Topics List */}
    <div className="mt-6">
      <h2 className="text-xl font-bold text-white">1. Basic Concept of Computer</h2>
      <ul className="list-disc list-inside text-gray-200 mt-2 ml-5">
        <li>CPU</li>
        <li>OS</li>
        <li>Bus</li>
        <li>and many more...</li>
      </ul>
    </div>

    {showAll && (
      <>
        {/* More Topics */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* English Typing */}
          <div className="bg-white/10 p-4 rounded-lg border-l-4 border-blue-300 backdrop-blur-md hover:scale-105 transition">
            <h2 className="text-lg font-semibold text-blue-200">2. English Typing</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 ml-5">
              <li>Monkey Type</li>
              <li>Typing Master</li>
            </ul>
          </div>

          {/* MS Word */}
          <div className="bg-white/10 p-4 rounded-lg border-l-4 border-green-300 backdrop-blur-md hover:scale-105 transition">
            <h2 className="text-lg font-semibold text-green-200">3. MS Word</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 ml-5">
              <li>Font & Paragraph Formatting</li>
              <li>Mail Merge</li>
            </ul>
          </div>
               {/* MS Excel */}
               <div className="bg-white/10 p-5 rounded-xl shadow-lg border-l-4 border-yellow-500 backdrop-blur-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-yellow-400">4. MS Excel</h2>
            <ul className="list-disc list-inside text-gray-300 mt-3 ml-5">
              <li>Introduction to Excel</li>
              <li>Entering and Editing Data</li>
              <li>Formulas (SUM, AVERAGE, etc.)</li>
              <li>Pivot Tables & Charts</li>
              <li>Project Work</li>
            </ul>
          </div>
             {/* MS PowerPoint */}
             <div className="bg-white/10 p-5 rounded-xl shadow-lg border-l-4 border-red-500 backdrop-blur-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-red-400">5. MS PowerPoint</h2>
            <ul className="list-disc list-inside text-gray-300 mt-3 ml-5">
              <li>Creating & Printing Slides</li>
              <li>Custom Animations</li>
              <li>Professional Presentations</li>
              <li>Project Work</li>
            </ul>
          </div>
              {/* Internet */}
              <div className="bg-white/10 p-5 rounded-xl shadow-lg border-l-4 border-purple-500 backdrop-blur-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-purple-400">6. Internet</h2>
            <ul className="list-disc list-inside text-gray-300 mt-3 ml-5">
              <li>Server Basics</li>
              <li>Online Bill Payment</li>
              <li>Online Ticket Booking</li>
              <li>and more...</li>
            </ul>
          </div>
                {/* Browser */}
                <div className="bg-white/10 p-5 rounded-xl shadow-lg border-l-4 border-purple-500 backdrop-blur-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-purple-400">7. Browser</h2>
            <ul className="list-disc list-inside text-gray-300 mt-3 ml-5">
              <li>How web browsers work?</li>
              <li>Uses browser for web surfing</li>
              <li> handle browser compatibility</li>
              <li>and more...</li>
            </ul>
          </div>

        </div>
      </>
    )}

    {/* Show More/Less Button */}
    <button
      onClick={() => setShowAll(!showAll)}
      className="mt-6  bg-white animate-pulse text-blue-600 px-5 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
    >
      {showAll ? "Show Less" : "Show More"}
    </button>

  </div>
</div>

<div className="w-full bg-gradient-to-r from-blue-500 to-purple-700 py-12 hidden md:block relative">
  {/* Background Overlay for Glassmorphism Effect */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"></div>

  <div className="relative max-w-6xl mx-auto text-white flex flex-col md:flex-row items-center md:items-start justify-between">
    
    {/* Left Side Content */}
    <div className="md:w-2/3 w-full px-6">
      <h2 className="text-4xl font-extrabold text-white shadow-md inline-block px-4 py-2 bg-white/20 rounded-md">
        About Us
      </h2>
      <h3 className="text-2xl font-semibold mt-6 text-white">
        Welcome to SK Computer Coaching Classes & Institute
      </h3>
      <p className="mt-4 text-lg leading-relaxed text-gray-200">
        Welcome to the heart of innovation, where every line of computer code we write is a step towards transforming 
        dreams into digital realities. At SK Computer Coaching Pvt. Ltd, we don't just teach DCA and PGDCA, 
        we craft experiences that resonate.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray-200">
        Our journey began with a simple mission: to bridge the gap between computers and human connection. 
        From the moment you step into our digital world, you embark on a journey beyond conventional boundaries.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray-200">
        From computer classes to advanced course strategies, we're your trusted guide on the road to success. 
        We provide not just solutions but the best teaching built on trust and integrity.
      </p>
      
      {/* CTA Button with Gradient */}
      <div className="mt-6">
        <button className="bg-gradient-to-r animate-pulse from-purple-500 to-blue-700 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="md:w-1/3 w-full flex justify-center mt-8 md:mt-30 md:ml-20">
      <img 
        src="com.png" 
        alt="Computer" 
        className="w-full max-w-xs md:max-w-md object-cover  shadow-lg  "
      />
    </div>
  </div>
</div>




<div className="text-center py-8 bg-gray-900 px-4 hidden md:block">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold w-full sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto rounded-3xl bg-gray-200 py-2 shadow-md">
        Our Featured Teaching
      </h2>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
        Let me know <b className="text-indigo-400 shadow-2xl">if you need</b> <br />
        any other modifications!
      </h1>
    </div>



  <div className="w-full flex flex-col items-center justify-center py-8 bg-gradient-to-br from-purple-600 to-blue-500 relative">
  
  {/* Glowing Background Effect */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

  <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden shadow-2xl rounded-2xl border border-white/20 z-10">
    
    {/* Carousel Items */}
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      {images.map((img, i) => (
        <div key={i} className="min-w-full flex flex-col items-center p-6">
          <h1 className="text-xl md:text-2xl font-extrabold text-white mb-4">{img.text}</h1>
          <img 
            src={img.src} 
            alt={img.text} 
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[450px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" 
          />
        </div>
      ))}
    </div>
    
    {/* Previous Button */}
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 p-3 rounded-full shadow-md hover:bg-white/20 transition"
      onClick={() => moveSlides(-1)}
    >
      <ChevronLeft size={28} className="text-white" />
    </button>

    {/* Next Button */}
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 p-3 rounded-full shadow-md hover:bg-white/20 transition"
      onClick={() => moveSlides(1)}
    >
      <ChevronRight size={28} className="text-white" />
    </button>

  </div>
</div>

 
<div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-10 min-h-[60vh] flex flex-col md:flex-row items-center justify-around">
  <div className="text-center md:text-left mt-10">
    <h1 className="md:text-4xl text-xl font-bold">
      SK <b className="text-orange-300">Computer Coaching</b>
    </h1>
    <h2 className="text-orange-200 mt-2 md:text-2xl hidden md:block">Limited Time</h2>
    <p className="mt-4 md:text-lg">
      You must learn computers at my coaching. <br /> & you will be studying with me for the first time.
    </p>
    <a href="/Contact">
      <button className="mt-8 px-6 py-3 text-2xl bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-500 transition">
        Let's Talk
      </button>
    </a>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start mt-6 md:mt-0 gap-10">
    <img
      src="f6.png"
      alt="group"
      className="w-80 h-80 mt-10 rounded-full  border-white shadow-lg hover:scale-105 transition duration-300 hidden md:block"
    />
    <img
      src="sk.png"
      alt="Sateesh"
      className="w-75 h-80 mt-10  rounded-full  border-white shadow-lg hover:scale-105 transition duration-300"
    />
  </div>
  <h5 className="md:mt-0 text-center md:text-left font-medium block md:hidden text-orange-200">
    Director Mr. Sateesh Kushwaha
  </h5>
</div>
<hr className="text-gray-600" />


<div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-10 min-h-[60vh] flex flex-col md:flex-row items-center justify-around">
  <div className="text-center md:text-left md:mr-10">
    <h1 className="md:text-4xl text-2xl  font-bold">
      Register for <b className="text-orange-300">SK Coaching</b>
    </h1>
    <p className="md:mt-20 mt-10  text-lg">
      Start your journey in the best computer training program.<br /> 
      <p className="hidden md:block">Limited seats available – Enroll Now! </p>
    </p>
    <a href="/Register">
      <button className="md:mt-16 mt-6  animate-pulse  ml-[-1.5vh] px-6 py-3 text-2xl bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-500 transition">
        Register Now
      </button>
    </a>
  </div>

  <div className="  items-center mt-6  hidden md:block">
    <img
      src="Register.webp"
      alt="Register Now"
      className="w-150 h-96   border-white shadow-xl hover:scale-105 transition duration-300"
    />
  </div>
</div>
 </>
  );
};

export default Home;
