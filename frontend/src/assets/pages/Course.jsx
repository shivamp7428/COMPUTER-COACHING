export default function CoursesPage() {
    const courses = [
      {
        title: "DCA (Diploma in Computer Applications)",
        duration: "6 Months",
        description: "Learn fundamental computer applications including MS Office, Tally, and basic programming.",
        eligibility: "10th Pass or Equivalent",
        syllabus: ["MS Office", "Tally", "Basic Programming", "Internet & Email"],
        career: "Data Entry Operator, Office Assistant, Computer Operator",
        bgColor: "bg-blue-200",
      },
      {
        title: "PGDCA (Post Graduate Diploma in Computer Applications)",
        duration: "1 Year",
        description: "Advanced computer applications, programming, and database management.",
        eligibility: "Graduate in Any Stream",
        syllabus: ["Advanced Excel", "Programming (C, Java, Python)", "DBMS", "Software Development"],
        career: "Software Developer, IT Support, Database Administrator",
        bgColor: "bg-green-200",
      },
      {
        title: "Web Development",
        duration: "6 Months",
        description: "HTML, CSS, JavaScript, React, and backend technologies.",
        eligibility: "12th Pass or Equivalent",
        syllabus: ["HTML, CSS, JavaScript", "React.js", "Node.js & Express", "Database (MongoDB/MySQL)"],
        career: "Web Developer, Frontend Developer, Backend Developer",
        bgColor: "bg-yellow-200",
     
      },
      {
        title: "Python Programming",
        duration: "3 Months",
        description: "Comprehensive Python training including data science and automation.",
        eligibility: "Basic Computer Knowledge",
        syllabus: ["Python Basics", "OOP & Data Structures", "Automation", "Data Science Basics"],
        career: "Python Developer, Data Analyst, Automation Engineer",
        bgColor: "bg-purple-200",
      },
      {
        title: "Graphic Designing",
        duration: "4 Months",
        description: "Photoshop, Illustrator, and other graphic tools for creative design.",
        eligibility: "Creative Enthusiasts, No Prior Experience Needed",
        syllabus: ["Photoshop", "Illustrator", "CorelDRAW", "UI/UX Design"],
        career: "Graphic Designer, UI/UX Designer, Digital Artist",
        bgColor: "bg-red-200",
      },
      {
        title: "Digital Marketing",
        duration: "4 Months",
        description: "Learn SEO, Social Media Marketing, PPC, and Content Marketing.",
        eligibility: "Anyone Interested in Online Marketing",
        syllabus: ["SEO", "Social Media Marketing", "PPC", "Content Marketing"],
        career: "Digital Marketer, SEO Specialist, Social Media Manager",
        bgColor: "bg-teal-200",
       
      },
    ];
  
    return (
      <div className="container mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mt-20 p-6">
        <h1 className="text-4xl font-bold text-center text-white mb-10 ">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition ${course.bgColor} ${course.hiddenOnMobile ? 'hidden sm:block' : ''}`}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">{course.title}</h2>
              <p className="text-gray-700 mb-2 font-medium">Duration: {course.duration}</p>
              <p className="text-gray-700 mb-2"><strong>Eligibility:</strong> {course.eligibility}</p>
              <p className="text-gray-800 mb-3">{course.description}</p>
              <p className="text-gray-700"><strong>Syllabus Highlights:</strong></p>
              <ul className="list-disc list-inside mb-3 text-gray-700">
                {course.syllabus.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <p className="text-gray-700"><strong>Career Opportunities:</strong> {course.career}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
