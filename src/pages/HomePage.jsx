import React from 'react'
import OurServices from '../HomeComponents/OurServices'
import HeroSection from '../HomeComponents/1'
import AboutUsSection from '../HomeComponents/AboutUsSection'
import MentorsSection from '../HomeComponents/3'
import TestimonialsSection from '../HomeComponents/5'
import TopperStudentsSection from '../HomeComponents/TopperStudentsSection'
import FAQSection from './Faqs'

const HomePage = () => {
  return (
    <div className='mt-10'>
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
