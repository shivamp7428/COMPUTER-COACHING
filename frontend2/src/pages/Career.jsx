import React from "react";

const CareerPage = () => {
  return (
    <div className="min-h-screen mt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Career in IT With Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Join our advanced computer coaching technologies and unlock new opportunities in the digital world.
        </p>
      </section>

      {/* Course Offerings */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Courses We Offer</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "DCA - Diploma in Computer Applications",
            "PGDCA - Post Graduate Diploma in Computer Applications",
            "DICO - Diploma in Computer Operation",
            "DCEM - Diploma in Computer & Electronics Maintenance",
            "ADHN - Advanced Diploma in Hardware & Networking",
            "DIWD - Diploma in Web Designing",
            "ADFA - Advanced Diploma in Financial Accounting",
            "ADCS - Advanced Diploma in Computer Science",
            "PGDCHN - Post Graduate Diploma in Computer Hardware & Networking"
          ].map((course, idx) => (
            <div key={idx} className="bg-gray-100 text-center p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{course.split(" - ")[0]}</h3>
              <p className="text-sm text-gray-600">{course.split(" - ")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Growth Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose a Career in IT?</h2>
          <p className="text-lg mb-4">
            The Information Technology sector is booming with opportunities. Our certified courses prepare you for real-world careers in software, web development, IT support, networking, and more.
          </p>
          <p className="text-lg">
            Whether you're starting your journey or upgrading your skills, our coaching helps you stay ahead.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-6">Enroll today and take the first step towards a successful IT career.</p>
        <a
          href="/Register"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default CareerPage;
