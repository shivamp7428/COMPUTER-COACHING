import { useState } from 'react'

import './App.css'
import Navbar from './assets/component/Navbar'
import Home from './assets/pages/Home'
import Footer from './assets/component/Footer'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
 
import Register from './assets/pages/Register'
import Login from './assets/pages/Login'
import About from './assets/pages/About'
import ContactUs from './assets/pages/Contact'
import Service from './assets/pages/Services'
import Video from './assets/pages/Video'
import Help from './assets/pages/Help'
import PrivacyPolicy from './assets/pages/Privacy'
import CoursesPage from './assets/pages/Course'
import TermsAndConditions from './assets/pages/Condition'
function App() {
 

  return (
   <>
 
  
   <BrowserRouter>
   <Navbar/>
     <Routes>
       <Route path='/'  element={<Home/>}/>
       <Route path='/Register'  element={<Register/>}/>
       <Route path='/Login'  element={<Login/>}/>
       <Route path='/About'  element={<About/>} />
       <Route path='/Contact'  element={<ContactUs/>} />
       <Route path='/Services'  element={<Service/>} />
       <Route path='/Help'  element={<Help/>} />
       <Route path='/Privacy'  element={<PrivacyPolicy/>} />
       <Route path='/Course'  element={<CoursesPage/>} />
       <Route path='/Condition'  element={<TermsAndConditions/>} />
 </Routes>
     <Footer/>
     </BrowserRouter>

   </>
  )
}

export default App
