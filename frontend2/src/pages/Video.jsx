import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';


const Video = () => {
  const [message, setMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState('item1');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const Name = localStorage.getItem("userName");
    if (Name) {
      setMessage(`Hi ${Name}, welcome to your course`.toUpperCase());
    }
  }, []);

  const videos = {
    item1: 'video1.mp4',
    item2: 'video2.mp4',
    item3: 'video3.mp4',
    item4: 'video4.mp4',
    item5: 'video5.mp4',
    item6: 'video6.mp4',
    item7: 'video7.mp4',
    item8: 'video8.mp4',
    item9: 'video9.mp4',
    item10: 'video10.mp4',
    item11: 'video11.mp4',
    item12: 'video12.mp4',
    item13: 'video13.mp4',
    item14: 'video14.mp4',
    item15: 'video15.mp4',
    item16: 'video16.mp4',
    item17: 'video17.mp4',
    item18: 'video18.mp4',
    item19: 'video19.mp4',
    item20: 'video20.mp4',
  };

  return (
   <>
  
    <div className="flex flex-col  md:flex-row h-screen">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block  w-1/4 border-r border-gray-300 bg-white overflow-y-auto p-4">
        <ul className="space-y-2">
          {Object.keys(videos).map((item, index) => (
            <li
              key={index}
              className={`p-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 ${
                selectedItem === item ? 'bg-gray-300' : ''
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {`Item ${index + 1}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden  p-4 flex gap-2">
        <button
          className="transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <h1 className="md:text-xl  text-sm text-center mt-5  font-bold mb-4">{message}</h1>
      </div>

      {/* Mobile Menu - Scrollable */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-white bg-opacity-95 overflow-y-auto shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Course Video</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <ul className="space-y-2">
            {Object.keys(videos).map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 ${
                  selectedItem === item ? 'bg-gray-300' : ''
                }`}
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(false);
                }}
              >
                {`Item ${index + 1}`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Video & Message Section */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="md:text-xl  text-sm text-center mt-5 hidden md:block  font-bold mb-4">{message}</h1>
        <video
          src={videos[selectedItem]}
          controls
          className="w-full md:h-[80vh] mt-5 h-[50vh]  rounded-lg shadow-md"
        />
      </div>
    </div>
   </>
  );
};

export default Video;
