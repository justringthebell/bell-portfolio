'use client'

import { useState } from 'react'
import Image from 'next/image'

const expertiseData = [
  {
    id: 1,
    name: 'C++',
    description: 'A versatile programming language that combines high-level object-oriented features with low-level memory control, making it ideal for building efficient software, from games to system applications.',
    image: '/images/cpp.png',
    details: 'My experience and knowledge of this programming language are currently limited to the basic level, and I am still in the process of learning and understanding its fundamental concepts and features.',
  },
  {
    id: 2,
    name: 'Python',
    description: 'A high-level, easy-to-learn programming language known for its readability and versatility, used in web development, data analysis, AI, and more.',
    image: '/images/python.png',
    details: 'My experience and knowledge of this programming language are currently limited to the basic level, and I am still in the process of learning and understanding its fundamental concepts and features.',
  },
  {
    id: 3,
    name: 'HTML (HyperText Markup Language)',
    description: 'The standard language for creating and structuring content on the web, defining elements like text, images, and links.',
    image: '/images/html.png',
    details: 'My experience and knowledge of this programming language are currently limited to the basic level, and I am still in the process of learning and understanding its fundamental concepts and features.',
  },
  {
    id: 4,
    name: 'CSS (Cascading Style Sheet)',
    description: 'A language used to style and design HTML content, controlling layout, colors, fonts, and overall visual appearance of web pages.',
    image: '/images/css.png',
    details: 'My experience and knowledge of this programming language are currently limited to the basic level, and I am still in the process of learning and understanding its fundamental concepts and features.',
  },
  {
    id: 5,
    name: 'Microsoft Word',
    description: 'A widely used word processing software that allows users to create, edit, and format documents, including text, images, tables, and more.',
    image: '/images/word.png',
    details: 'I have a good level of knowledge and proficiency in Microsoft Word, allowing me to efficiently create, format, and manage various types of documents.',
  },
  {
    id: 6,
    name: 'Microsoft Excel',
    description: 'A spreadsheet program that allows users to organize, analyze, and visualize data using tables, formulas, and charts.',
    image: '/images/excel.png',
    details: 'My knowledge of Microsoft Excel is good, though not as advanced as my proficiency in Microsoft Word, allowing me to perform tasks like organizing data, using basic formulas, and creating simple charts effectively.',
  }
]

function ExpertiseCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="edu-card expertise-card"
      style={{ animationDelay: `${0.3 + Math.floor(index / 2) * 0.3}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="edu-img">
        <Image
          src={skill.image}
          alt={skill.name}
          width={350}
          height={250}
          className="rounded-xl"
        />
      </div>
      <div className="edu-info">
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
      </div>
      <div className={`hidden-card ${isHovered ? 'visible' : ''}`}>
        <p><strong>{skill.details}</strong></p>
      </div>
    </div>
  )
}

export default function Expertise() {
  return (
    <section className="section-transition pt-24 px-8 pb-12">
      <div className="edu-section">
        <h2>My Expertise</h2>
        <div className="expertise-container">
          {expertiseData.map((skill, index) => (
            <ExpertiseCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}