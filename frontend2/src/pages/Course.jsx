import { useState } from "react";

export default function CoursesPage() {
  const courses = [
    {
      title: "DCA (Diploma in Computer Applications)",
      duration: "6 Months",
      description: "Learn fundamental computer applications including MS Office, Tally, and basic programming.",
      eligibility: "10th Pass or Equivalent",
      syllabus: ["MS Office", "Tally", "Basic Programming", "Internet & Email"],
      career: "Data Entry Operator, Office Assistant, Computer Operator",
    },
    {
      title: "PGDCA (Post Graduate Diploma in Computer Applications)",
      duration: "1 Year",
      description: "Advanced computer applications, programming, and database management.",
      eligibility: "Graduate in Any Stream",
      syllabus: ["Advanced Excel", "Programming (C, Java, Python)", "DBMS", "Software Development"],
      career: "Software Developer, IT Support, Database Administrator",
    },
    {
      title: "ADCA (Advanced Diploma in Computer Applications)",
      duration: "1 Year",
      description: "Covers advanced computer skills including accounting software and desktop publishing.",
      eligibility: "10th Pass or Equivalent",
      syllabus: ["MS Office", "Tally", "DTP", "Internet & Email"],
      career: "Office Assistant, DTP Operator, Data Entry Operator",
    },
    {
      title: "DICP (Diploma in Computer Programming)",
      duration: "6 Months",
      description: "Programming languages and logic building from beginner to intermediate level.",
      eligibility: "10th Pass or Equivalent",
      syllabus: ["C", "C++", "Java Basics", "Python Basics"],
      career: "Programmer, Software Intern, Junior Developer",
    },
    {
      title: "DPCTT (Diploma in Primary Computer Teacher Training)",
      duration: "1 Year",
      description: "Designed for individuals aspiring to teach basic computer education.",
      eligibility: "12th Pass",
      syllabus: ["Teaching Methodologies", "Basic Computer", "MS Office", "Internet"],
      career: "Computer Teacher, Faculty Trainer",
    },
    {
      title: "DIWD (Diploma in Web Designing)",
      duration: "6 Months",
      description: "Designing websites using HTML, CSS, and design tools.",
      eligibility: "10th Pass or Equivalent",
      syllabus: ["HTML", "CSS", "Photoshop", "Basic JavaScript"],
      career: "Web Designer, UI Designer",
    },
    {
      title: "ADFA (Advanced Diploma in Financial Accounting)",
      duration: "6 Months",
      description: "Master financial tools such as Tally, GST, and payroll systems.",
      eligibility: "12th Pass or Equivalent",
      syllabus: ["Tally", "GST Filing", "MS Excel", "Payroll"],
      career: "Account Assistant, Tally Operator",
    },
    {
      title: "ADCS (Advanced Diploma in Computer Science)",
      duration: "1 Year",
      description: "A broad computer science program covering IT fundamentals.",
      eligibility: "10th Pass or Equivalent",
      syllabus: ["OS", "DBMS", "Programming", "Networking Basics"],
      career: "IT Assistant, Computer Operator",
    },
    {
      title: "PGDCHN (PG Diploma in Computer Hardware & Networking)",
      duration: "1 Year",
      description: "Hardware maintenance, networking essentials, and server setup.",
      eligibility: "Graduate in Any Stream",
      syllabus: ["Hardware Basics", "LAN/WAN Setup", "Networking Protocols", "Server Installation"],
      career: "Hardware Technician, Network Support",
    },
    {
      title: "MDCA (Master Diploma in Computer Applications)",
      duration: "1.5 Years",
      description: "Comprehensive course in office tools, design, programming, and accounting.",
      eligibility: "12th Pass or Equivalent",
      syllabus: ["MS Office", "Tally", "Photoshop", "C/C++", "HTML/CSS"],
      career: "Computer Instructor, Office Coordinator",
    },
    {
      title: "PGDIT (Post Graduate Diploma in Information Technology)",
      duration: "1 Year",
      description: "Post-graduate program for advanced IT skills and software development.",
      eligibility: "Graduate in Any Stream",
      syllabus: ["Software Engineering", "OOP", "Web Tech", "Database Management"],
      career: "Software Engineer, IT Consultant",
    },
    {
      title: "ADCAWD (Advanced Diploma in Computer Applications & Web Designing)",
      duration: "1 Year",
      description: "Blended course with office tools and basic website development.",
      eligibility: "10th Pass",
      syllabus: ["MS Office", "Photoshop", "HTML", "CSS"],
      career: "Web Designer, Office Executive",
    },
    {
      title: "PGDM (Post Graduate Diploma in Multimedia)",
      duration: "1 Year",
      description: "Graphic and multimedia design skills for digital creatives.",
      eligibility: "Graduate or Equivalent",
      syllabus: ["Photoshop", "Illustrator", "After Effects", "3D Basics"],
      career: "Multimedia Designer, Animator",
    },
    {
      title: "ADDM (Advanced Diploma in Digital Marketing)",
      duration: "6 Months",
      description: "In-depth training on online marketing tools and strategies.",
      eligibility: "12th Pass or Equivalent",
      syllabus: ["SEO", "Email Marketing", "Social Media", "Google Ads"],
      career: "Digital Marketing Executive, SEO Analyst",
    },
    {
      title: "PGDST (Post Graduate Diploma in Software Technology)",
      duration: "1 Year",
      description: "Intensive software development training for professionals.",
      eligibility: "Graduate",
      syllabus: ["Java", "Web Development", "DBMS", "Project Work"],
      career: "Software Developer, Tech Consultant",
    },
    {
      title: "ADCTT (Advanced Diploma in Computer Teacher Training)",
      duration: "1 Year",
      description: "Prepares individuals for teaching roles in computer institutes.",
      eligibility: "12th Pass",
      syllabus: ["Computer Basics", "Teaching Techniques", "MS Office", "Practical Training"],
      career: "Computer Faculty, IT Instructor",
    },
    {
      title: "ADWD (Advanced Diploma in Web Development)",
      duration: "1 Year",
      description: "Full-stack development with HTML, CSS, JS, and backend.",
      eligibility: "12th Pass or Equivalent",
      syllabus: ["HTML/CSS", "JS", "React", "Node.js"],
      career: "Full Stack Developer, Web App Developer",
    },
    {
      title: "DCFA (Diploma in Computerized Financial Accounting)",
      duration: "6 Months",
      description: "Covers all major financial accounting software and tools.",
      eligibility: "12th Pass",
      syllabus: ["Tally", "GST", "MS Excel", "Inventory Accounting"],
      career: "Accounts Assistant, Tax Consultant",
    },
  ];
    const [showAll, setShowAll] = useState(false);

    return (
  <>
 
<div className=" bg-cover bg-center bg-no-repeat ">
<div className="flex flex-col    md:flex-row items-center px-6 md:px-12 py-12 min-h-screen   ">
  
  {/* Left Section - Image & Heading */}
  <div className="w-full md:w-1/2 flex flex-col mt-20 items-center md:items-start text-center md:text-left">
     {/* Title */}
     <h1 className="text-2xl md:text-5xl font-extrabold    ">
      Basic Computer Concept 💻
    </h1>
    
    {/* Image with Hover Animation */}
    <img src="computer.svg"  alt="Computer"  className="w-72 h-44 md:w-96 md:h-52 mt-10 rounded-xl     hover:scale-105 transition duration-300 " />
    </div>

  {/* Right Section - Content */}
  <div className="w-full md:w-1/2 mt-20 p-6 md:p-10 rounded-lg shadow-lg backdrop-blur-md border ">
   
    <div className="mt-6">
      <h2 className="text-xl font-bold ">1. Basic Concept of Computer</h2>
      <ul className="list-disc list-inside  mt-2 ml-5">
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
          <div className="bg-white/10 p-4 rounded-lg border shadow-md hover:scale-105 transition">
            <h2 className="text-lg font-semibold ">2. English Typing</h2>
            <ul className="list-disc list-inside  mt-2 ml-5">
              <li>Monkey Type</li>
              <li>Typing Master</li>
            </ul>
          </div>

          {/* MS Word */}
          <div className="bg-white/10 p-4 rounded-lg border shadow-md hover:scale-105 transition">
            <h2 className="text-lg font-semibold ">3. MS Word</h2>
            <ul className="list-disc list-inside  mt-2 ml-5">
              <li>Font & Paragraph Formatting</li>
              <li>Mail Merge</li>
            </ul>
          </div>
               {/* MS Excel */}
               <div className="bg-white/10 p-5 rounded-xl shadow-md border hover:scale-105 transition">
            <h2 className="text-xl font-bold ">4. MS Excel</h2>
            <ul className="list-disc list-inside  mt-3 ml-5">
              <li>Introduction to Excel</li>
              <li>Entering and Editing Data</li>
              <li>Formulas (SUM, AVERAGE, etc.)</li>
              <li>Pivot Tables & Charts</li>
              <li>Project Work</li>
            </ul>
          </div>
             {/* MS PowerPoint */}
             <div className="bg-white/10 p-5 rounded-xl shadow-md border hover:scale-105 transition">
            <h2 className="text-xl font-bold ">5. MS PowerPoint</h2>
            <ul className="list-disc list-inside  mt-3 ml-5">
              <li>Creating & Printing Slides</li>
              <li>Custom Animations</li>
              <li>Professional Presentations</li>
              <li>Project Work</li>
            </ul>
          </div>
              {/* Internet */}
              <div className="bg-white/10 p-5 rounded-xl shadow-md border hover:scale-105 transition">
            <h2 className="text-xl font-bold ">6. Internet</h2>
            <ul className="list-disc list-inside  mt-3 ml-5">
              <li>Server Basics</li>
              <li>Online Bill Payment</li>
              <li>Online Ticket Booking</li>
              <li>and more...</li>
            </ul>
          </div>
                {/* Browser */}
                <div className="bg-white/10 p-5 rounded-xl shadow-md border hover:scale-105 transition">
            <h2 className="text-xl font-bold ">7. Browser</h2>
            <ul className="list-disc list-inside  mt-3 ml-5">
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
      className="mt-6  bg-gray-300  text-blue-600 px-5 py-3 rounded-lg shadow-2xl hover:bg-gray-200 transition"
    >
      {showAll ? "Show Less" : "Show More"}
    </button>

  </div>
</div>

      <div className="container mx-auto  ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`p-6  hover:scale-105 transition shadow-lg border hover:shadow-2xl  ${course.bgColor} ${course.hiddenOnMobile ? 'hidden sm:block' : ''}`}
            >
              <h2 className="text-2xl font-semibold mb-3 ">{course.title}</h2>
              <p className=" mb-2 font-medium">Duration: {course.duration}</p>
              <p className=" mb-2"><strong>Eligibility:</strong> {course.eligibility}</p>
              <p className=" mb-3">{course.description}</p>
              <p><strong>Syllabus Highlights:</strong></p>
              <ul className="list-disc list-inside mb-3 ">
                {course.syllabus.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <p ><strong>Career Opportunities:</strong> {course.career}</p>
            </div>
          ))}
        </div>
      </div>

     
      {/* Call to Action */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl font-bold">Join Us</h2>
        <p className="mt-3 text-lg">
         You are select any course and get in my coaching
        </p>
        <a
          href="/Contact"
          className="px-8 py-3 bg-gray-300 text-indigo-600 mt-5 inline-block font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </a>
      </section>

</div>
  </>
    );
  }
