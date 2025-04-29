export default function Service() {
  const services = [
    {
      title: "PGDCA",
      desc: "Post Graduate Diploma in Computer Applications: Advanced training in computer science, software development, and IT management.",
      icon: "🎓",
    },
    {
      title: "DCA",
      desc: "Diploma in Computer Applications: Comprehensive understanding of computer applications, programming languages, and software tools.",
      icon: "💻",
    },
    {
      title: "Tally",
      desc: "Professional training in Tally ERP 9 for efficient financial management, accounting, and GST compliance.",
      icon: "📊",
    },
    {
      title: "CPCT",
      desc: "Computer Proficiency Certification Test: Preparation for state-level certification, enhancing typing skills, and understanding computer fundamentals.",
      icon: "⌨️",
    },
    {
      title: "ADCA",
      desc: "Advanced Diploma in Computer Applications: In-depth knowledge of software development, network management, and database systems.",
      icon: "💡",
    },
    {
      title: "DICP",
      desc: "Diploma in Information and Communication Protocols: Understanding of networking protocols, communication technologies, and data transmission.",
      icon: "📡",
    },
    {
      title: "DPCTT",
      desc: "Diploma in Professional Computer Training Techniques: Training in teaching computer courses and understanding modern pedagogical approaches.",
      icon: "🎓",
    },
    {
      title: "DIWD",
      desc: "Diploma in Internet and Web Development: Skills in web design, front-end technologies, back-end development, and online security.",
      icon: "🌐",
    },
    {
      title: "ADFA",
      desc: "Advanced Diploma in Financial Accounting: Training in accounting, taxation, and financial analysis using modern software.",
      icon: "💰",
    },
    {
      title: "ADCS",
      desc: "Advanced Diploma in Computer Science: Focus on computer science fundamentals, algorithms, and high-level programming languages.",
      icon: "🖥️",
    },
    {
      title: "PGDCHN",
      desc: "Post Graduate Diploma in Computer Hardware and Networking: Training in computer hardware systems, network configurations, and troubleshooting.",
      icon: "🔧",
    },
    {
      title: "MDCA",
      desc: "Master Diploma in Computer Applications: Mastery in advanced computer science, IT management, and cutting-edge software development technologies.",
      icon: "🌟",
    },
  ];
  
  return (
    <div className="min-h-screen p-6 bg-[url('f8.avif')] bg-cover bg-center bg-no-repeat">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mt-20 mx-auto py-12">
        <h1 className="text-4xl font-extrabold">Our Service</h1>
        <p className="text-lg mt-4">
          We provide top-notch services to elevate your business and your career. <br />
          You can learn any of these computer courses at our Coaching.
        </p>
      </div>
    
      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-3 shadow-md flex flex-col items-center backdrop-blur-md border">
            <div className="text-5xl">{service.icon}</div>
            <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
            <p className="mt-2 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    
      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl text-green-400 font-semibold">Need a Custom Solution?</h2>
        <p className="text-lg mt-2 text-gray-400">Contact us today and let's discuss your project!</p>
        <a href="/Contact" className="mt-4 inline-block shadow-2xl bg-gray-200 text-blue-600 px-6 py-3 rounded-full font-semibold transition">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
