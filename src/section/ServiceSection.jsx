import React from 'react'
import CoachingSection from './CochingSection'
import CompanyReviewSection from './CompanyReviewSection'
import AccountReviewSection from './AccountReviewSection'
import InternSection from './InternSection'
import HRConsulting from './HRConsulting'
import SEOOptimization from './SEOOptimization'
import JobHiring from './JobHiring'
import ProjectHub from './ProjectHub'

const ServiceSection = () => {
  return (
    <div className='mt-10'>
      <CoachingSection />
      <CompanyReviewSection />
      <AccountReviewSection />
      <InternSection />
      <HRConsulting />
      <SEOOptimization /> 
      <JobHiring />
      <ProjectHub /> 
    </div>
  )
}

export default ServiceSection
