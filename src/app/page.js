'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PersonalInfo from '@/components/PersonalInfo'
import Education from '@/components/Education'
import Expertise from '@/components/Expertise'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'personal-info' && <PersonalInfo />}
      {activeSection === 'education' && <Education />}
      {activeSection === 'expertise' && <Expertise />}
      {activeSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  )
}