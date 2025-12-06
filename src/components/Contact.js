'use client'

import { useState } from 'react'
import Image from 'next/image'

const contactData = [
  {
    id: 1,
    title: 'Email',
    value: 'Bamahometano802.pbox@parsu.edu.ph',
    image: '/images/email.png',
    details: 'You can reach me via email for inquiries, collaboration, or questions about my projects.',
  },
  {
    id: 2,
    title: 'Phone',
    value: '+63 927 396 2936',
    image: '/images/phone.png',
    details: 'Feel free to call or text me for any quick questions or discussion regarding my work.',
  },
  {
    id: 3,
    title: 'Facebook',
    value: 'Visit my Facebook Profile',
    image: '/images/facebook.png',
    details: 'Connect with me on Facebook to see updates, projects, and posts.',
    link: 'https://www.facebook.com/bellanton.mahometano.7'
  },
  {
    id: 4,
    title: 'Instagram',
    value: 'Follow me on Instagram',
    image: '/images/insta.png',
    details: 'Check out my Instagram for photos, updates, and creative content.',
    link: 'https://www.instagram.com/mahoms375/'
  }
]

function ContactCard({ contact, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const CardContent = () => (
    <div 
      className="edu-card contact-card"
      style={{ animationDelay: `${0.3 + index * 0.3}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="contact-content">
        <div className="edu-img contact-img">
          <Image
            src={contact.image}
            alt={contact.title}
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
        <div className="edu-info contact-info">
          <h3>{contact.title}</h3>
          <p>{contact.value}</p>
        </div>
      </div>
      <div className={`hidden-card ${isHovered ? 'visible' : ''}`}>
        <p><strong>{contact.details}</strong></p>
      </div>
    </div>
  )

  if (contact.link) {
    return (
      <a 
        href={contact.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-link"
      >
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}

export default function Contact() {
  return (
    <section className="section-transition pt-32 px-8 pb-12">
      <div className="edu-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          {contactData.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}