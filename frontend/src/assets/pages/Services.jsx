export default function Service() {
    const services = [
      { title: "Web Dev", desc: "Modern and scalable web solutions.", icon: "💻" },
      { title: "Mobile App", desc: "Innovative mobile applications for iOS & Android.", icon: "📱" },
      { title: "UI/UX Design", desc: "User-friendly and attractive designs.", icon: "🎨" },
      { title: "Computer", desc: "We are provide best teaching of computer.", icon: "💻" }
    ];
  
    return (
      <div className="bg-gradient-to-b from-blue-500 to-purple-600 min-h-screen mt-20 p-6 text-white">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="md:text-5xl text:xl font-bold">Our Services</h1>
          <p className="text-lg mt-4">We provide top-notch services to elevate your business and your career. <br />
              You can learn on this Coaching Programming language like C , C++ , Java , Html , CSS & JS.
          </p>
        </div>
  
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-2xl shadow-lg flex  flex-col items-center backdrop-blur-md border border-white/20">
              <div className="text-5xl">{service.icon}</div>
              <h2 className="text-2xl font-semibold  mt-4">{service.title}</h2>
              <p className="text-white/80 mt-2 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
  
        {/* CTA Section */}
        <div className="mt-12 text-center">
  <h2 className="text-3xl font-semibold">Need a Custom Solution?</h2>
  <p className="text-lg mt-2">Contact us today and let's discuss your project!</p>
  <a  href="/Contact"  className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition" >
    Get in Touch</a>
</div>

      </div>
    );
}
