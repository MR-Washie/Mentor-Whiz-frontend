import React from 'react'
import OurServices from '../components/OurServices'
import HeroSection from '../HomeComponents/1'
import AboutUsSection from '../HomeComponents/AboutUsSection'
import MentorsSection from '../HomeComponents/3'
import TestimonialsSection from '../HomeComponents/5'
import TopperStudentsSection from '../HomeComponents/TopperStudentsSection'
import FAQSection from './Faqs'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <MentorsSection />
      <OurServices />
      <TestimonialsSection />
      <TopperStudentsSection />
      <FAQSection />
    </div>
  )
}

export default HomePage
