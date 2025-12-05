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
    delay: '0.3s',
    link: null
  },
  {
    id: 2,
    title: 'Phone',
    value: '+63 927 396 2936',
    image: '/images/phone.png',
    details: 'Feel free to call or text me for any quick questions or discussion regarding my work.',
    delay: '0.6s',
    link: null
  },
  {
    id: 3,
    title: 'Facebook',
    value: 'Visit my Facebook Profile',
    image: '/images/facebook.png',
    details: 'Connect with me on Facebook to see updates, projects, and posts.',
    delay: '0.9s',
    link: 'https://www.facebook.com/bellanton.mahometano.7'
  },
  {
    id: 4,
    title: 'Instagram',
    value: 'Follow me on Instagram',
    image: '/images/insta.png',
    details: 'Check out my Instagram for photos, updates, and creative content.',
    delay: '1.2s',
    link: 'https://www.instagram.com/mahoms375/'
  }
]

function ContactCard({ contact }) {
  const [isHovered, setIsHovered] = useState(false)

  const CardContent = () => (
    <div 
      className="relative flex flex-col items-center justify-center flex-1 min-w-[250px] bg-gray-100 dark:bg-[#4b4a4a] p-6 rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-[1.03] opacity-0 animate-[fadeInUp_1s_ease_forwards]"
      style={{ animationDelay: contact.delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="mb-4 w-full max-w-[120px]">
        <Image
          src={contact.image}
          alt={contact.title}
          width={120}
          height={120}
          className="rounded-lg mx-auto w-full h-auto"
        />
      </div>
      
      {/* Info Container */}
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {contact.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {contact.value}
        </p>
      </div>
      
      {/* Hidden Card on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-white/85 dark:bg-[#363636]/90 rounded-xl flex items-center justify-center p-6 transition-all duration-400">
          <p className="text-center text-sm md:text-base text-gray-900 dark:text-gray-100">
            <strong>{contact.details}</strong>
          </p>
        </div>
      )}
    </div>
  )

  if (contact.link) {
    return (
      <a 
        href={contact.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 min-w-[250px] no-underline"
      >
        <CardContent />
      </a>
    )
  }

  return <div className="flex-1 min-w-[250px]"><CardContent /></div>
}

export default function Contact() {
  return (
    <section className="section-transition pt-24 px-8 pb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-wrap justify-between gap-4">
          {contactData.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  )
}