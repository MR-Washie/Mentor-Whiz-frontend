import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPassword'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Faqs from './pages/Faqs'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import BecomeMentor from './pages/BecomeMentor'
import Plan from './pages/Plan'
import ProfilePage from './pages/ProfilePage'
import ServiceSection from './section/ServiceSection'
import OurMentor from './homePageSeeAll/OurMentor'
import Feedback from './homePageSeeAll/Feedback'
import TopperStudentList from './homePageSeeAll/TopperStudentList'

import { Toaster } from "react-hot-toast";

import { useAuthStore } from "./store/useAuthStore";


const App = () => {
  const { authUser } = useAuthStore();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path = "/faqs" element={<Faqs />} />
        <Route path="/contact-us" element={!authUser? <LoginPage/> : <ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/become-mentor" element={!authUser? <LoginPage/> : <BecomeMentor />} />
        <Route path="/plan" element={<Plan />} />
        <Route path='/profile' element = {authUser? <ProfilePage /> : <LoginPage/>} />
        <Route path="/our-services" element={<ServiceSection />} />
        <Route path='/our-mentor' element = { <OurMentor />} />
        <Route path='/feedback' element = {authUser? <Feedback /> : <LoginPage/>} />
        <Route path='/topper-student-list' element = { <TopperStudentList />} />
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>
      <Footer />

       <Toaster />
    </div>
  )
}

export default App