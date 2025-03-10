export default function Help() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 mt-20">
        <div className="max-w-4xl mx-auto text-white shadow-md md:mt-10 rounded-2xl p-6">
          <h1 className=" md:text-3xl text-2xl font-bold  mb-4">Help & Support</h1>
          
          {/* FAQ Section */}
          <div className="mb-6 text-white">
            <h2 className="text-xl font-semibold  mb-2">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-4 border  border-black rounded-lg ">
                <h3 className="font-medium ">Q: What courses do you offer?</h3>
                <p>Ans:- We offer computer courses like DCA , PGDCA, and more.</p>
              </div>
              <div className="p-4 border border-black rounded-lg ">
                <h3 className="font-medium">Q: How can I enroll?</h3>
                <p >Ans:- You can enroll online through our website or visit our institute.</p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold  mb-2">Contact Us</h2>
            <p>For any assistance, reach out to us:</p>
            <ul className="mt-2 ">
              <li className="md:hidden"><strong>Email:</strong>shivampatelpatel2005 <br /> @gmail.com</li>
              <li className="hidden md:block"><strong>Email:</strong> shivampatelpatel2005@gmail.com</li>
              <li><strong>Phone:</strong> +91 6232456010</li>
              <li><strong>Address:</strong> Amarpatan  district :- Maihar (m.p) India.</li>
            </ul>
          </div>
          
          {/* Support Options */}
          <div>
            <h2 className="text-xl font-semibold  mb-2">Need More Help?</h2>
            <p className="mb-2">Join our support chat or visit our help desk for further assistance.</p>
           <a href="/Contact" className="px-4 py-2  bg-blue-600  text-white rounded-lg hover:bg-blue-700">Live chat</a>
          </div>
        </div>
      </div>
    );
  }
  