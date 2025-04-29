import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import LoginForm from './pages/Login';
import About from './pages/About';
import ContactUs from './pages/Contact';
import Service from './pages/Services';
import Help from './pages/Help';
import PrivacyPolicy from './pages/Privacy';
import CoursesPage from './pages/Course';
import TermsAndConditions from './pages/Condition';
import Video from './pages/Video';
import Footer from './component/Footer';
import Dashboard from './pages/dashboard';
import CareerPage from './pages/Career';
import PaymentPage from './pages/Payment';
import NotFound from './component/NotFound';
import PopupModal from './pages/OpenPOP';

function MainLayout() {
  const location = useLocation();

  // Check if current route is exactly "/video"
  const isExactVideoPage = location.pathname === '/Video';

  return (
    <>
      {/* Show Navbar only if not on "/video" */}
      {!isExactVideoPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Course" element={<CoursesPage />} />
        <Route path="/Condition" element={<TermsAndConditions />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Show Footer only if not on "/video" */}
      {!isExactVideoPage && <Footer />}
      

      <div className="min-h-screen bg-gray-100 p-8">
      <PopupModal />
    </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
    
  );
}

export default App;
