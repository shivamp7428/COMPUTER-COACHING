import React from "react";

const TermsAndConditions = () => {
  return (
  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
      <div className="max-w-4xl mt-20 text-white mx-auto  p-6  rounded-lg shadow-md ">
      <h1 className="text-3xl font-bold text-center mb-6">
        Terms & Conditions
      </h1>
      <p className="text-xl  font-bold text-center mb-10">
        Please read these terms carefully before enrolling in our courses.
      </p>
   
      
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            By enrolling in our computer course, you agree to comply with the following terms and conditions. Please read them carefully.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Course Enrollment</h2>
          <p >
            Enrollment is confirmed only after full payment. The course fee is non-refundable unless explicitly stated otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Course Material</h2>
          <p >
            All course materials are for personal use only. Unauthorized distribution or reproduction is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Attendance & Certification</h2>
          <p >
            A minimum attendance of 75% is required to receive certification. Assessments and assignments must be completed as per deadlines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Code of Conduct</h2>
          <p>
            Students must maintain respectful behavior in class. Any misconduct may lead to suspension or termination from the course.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Liability & Disclaimer</h2>
          <p>
            The institute is not responsible for any personal loss or damage during the course duration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Amendments</h2>
          <p>
            We reserve the right to update these terms at any time. Students will be notified of any changes.
          </p>
        </section>
      </div>
    </div>
  </div>
  );
};

export default TermsAndConditions;