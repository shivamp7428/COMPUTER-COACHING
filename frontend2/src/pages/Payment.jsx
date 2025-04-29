import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
const courseData = {
  DCA: { name: "Diploma in Computer Applications", price: 1000 },
  PGDCA: { name: "Post Graduate Diploma in Computer Applications", price: 1500 },
  ADCA: { name: "Advanced Diploma in Computer Applications", price: 1200 },
  DICP: { name: "Diploma in Computer Programming", price: 1100 },
  DPCTT: { name: "Diploma in Programming and Computer Technology", price: 1300 },
  DIWD: { name: "Diploma in Web Development", price: 1400 },
  ADFA: { name: "Advanced Diploma in Financial Accounting", price: 1500 },
  ADCS: { name: "Advanced Diploma in Computer Science", price: 1600 },
  PGDCHN: { name: "Post Graduate Diploma in Computer Hardware Networking", price: 1700 },
  MDCA: { name: "Master Diploma in Computer Applications", price: 2000 },
  PGDIT: { name: "Post Graduate Diploma in Information Technology", price: 1800 },
  ADCSWD: { name: "Advanced Diploma in Computer Science & Web Development", price: 1900 },
  PGDM: { name: "Post Graduate Diploma in Management", price: 2200 },
  ADDM: { name: "Advanced Diploma in Digital Marketing", price: 2100 },
  PGDST: { name: "Post Graduate Diploma in Software Technology", price: 2400 },
  ADCTT: { name: "Advanced Diploma in Computer and Technical Training", price: 2000 },
  ADWD: { name: "Advanced Diploma in Web Development", price: 2100 },
  DCFA: { name: "Diploma in Computer Financial Accounting", price: 1500 },
  DOAP: { name: "Diploma in Office Administration and Planning", price: 1300 },
  DJMC: { name: "Diploma in Journalism and Mass Communication", price: 1800 },
  DSD: { name: "Diploma in Software Development", price: 1700 },
  PGDIRM: { name: "Post Graduate Diploma in International Relations and Management", price: 2500 },
  PGDBF: { name: "Post Graduate Diploma in Banking and Finance", price: 2200 },
  DBF: { name: "Diploma in Banking and Finance", price: 1600 },
  ADFAT: { name: "Advanced Diploma in Fashion and Textile", price: 1900 },
  ADMA: { name: "Advanced Diploma in Management", price: 2100 },
  ADDTP: { name: "Advanced Diploma in Digital Photography", price: 2000 },
  ADCO: { name: "Advanced Diploma in Computer Organization", price: 2200 },
  ADCP: { name: "Advanced Diploma in Creative Photography", price: 2100 },
  PGDCWD: { name: "Post Graduate Diploma in Computer Web Development", price: 2500 },
  ADDEO: { name: "Advanced Diploma in Environmental and Organic Farming", price: 2300 },
  DNTT: { name: "Diploma in Network and Technical Training", price: 1500 },
  DIOA: { name: "Diploma in Office Automation", price: 1200 },
  ADHN: { name: "Advanced Diploma in Horticulture", price: 1800 },
  PGDA: { name: "Post Graduate Diploma in Arts", price: 2200 },
  DICO: { name: "Diploma in Industrial and Organizational Psychology", price: 1400 },
  CTTC: { name: "Certificate in Technical Training", price: 900 },
  DPT: { name: "Diploma in Photography", price: 1500 },
  DDE: { name: "Diploma in Data Engineering", price: 2000 },
  ADA: { name: "Advanced Diploma in Arts", price: 1700 },
  DTTM: { name: "Diploma in Travel and Tourism Management", price: 1500 },
  DCFS: { name: "Diploma in Computer Financial Services", price: 1800 }
};



const PaymentPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleCourseSelect = (selectedOption) => {
    setSelectedCourse(selectedOption ? selectedOption.value : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseName = courseData[selectedCourse]?.name || "";
    const coursePrice = courseData[selectedCourse]?.price || "";

    const message = `🎓 *New Admission Form*\n\n👤 Name: ${fullName}\n📧 Email: ${email}\n📚 Course: ${courseName} (${selectedCourse})\n💰 Price: ₹${coursePrice}`;

    try {
      
      await axios.post("https://localhost:5001/api/v1/User/send-whatsapp", {
        message: message,
        phoneNumber: "918871736638", 
      });

      alert("Message sent successfully!"); 
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending the message.");
    }
  };

  const courseOptions = Object.entries(courseData).map(([code, { name }]) => ({
    value: code,
    label: `${code} - ${name}`,
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      borderBottom: "2px solid #ccc",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      boxShadow: "none",
      padding: "5px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#555",
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "#555",
    }),
  };

  return (
    <div className="flex gap-30">
      <img src="f9.svg" alt="payment" className="m-40 h-130 mr-10 hidden md:block" />
      <div className="min-h-screen mt-10 flex items-center justify-center p-6">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Take Online Admission
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-4 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm">Select Course</label>
              <Select
                options={courseOptions}
                value={courseOptions.find((option) => option.value === selectedCourse)}
                onChange={handleCourseSelect}
                placeholder="Select a course"
                styles={customStyles}
              />
            </div>

            {selectedCourse && (
              <div className="text-lg font-semibold text-gray-800">
                Course Price:{" "}
                <span className="text-green-600 font-bold">
                  ₹{courseData[selectedCourse].price}
                </span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
