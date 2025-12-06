'use client'

import { useState } from 'react'
import Image from 'next/image'

const educationData = [
  {
    id: 1,
    school: 'Partido State University',
    degree: 'Bachelor of Science in Computer Science',
    years: '(2023–Present)',
    image: '/images/parsu.png',
    details: 'I am currently studying at Partido State University, where I am pursuing a Bachelor of Science in Computer Science. As a third-year student, I am continuously enhancing my knowledge in programming, software development, and technology-driven problem solving. My education at Partido State University has helped me develop strong analytical and technical skills, preparing me for future opportunities.',
  },
  {
    id: 2,
    school: 'Goa National High School',
    degree: 'Senior High School Graduate',
    years: '(2021–2023)',
    image: '/images/gnhs.png',
    details: 'I took the General Academic Strand (GAS) during my Senior High School years at Goa National High School, where I successfully completed my secondary education. The General Academic Strand helped me build a strong foundation in various fields such as communication, research, and critical thinking. Through this program, I was able to explore different areas of study, which guided me in discovering my interests and strengths. My experiences and learnings in Goa National High School played a vital role in shaping my goals.',
  },
  {
    id: 3,
    school: 'San Rafael National High School',
    degree: 'Junior High School Graduate',
    years: '(2017–2021)',
    image: '/images/sanrafael.png',
    details: 'I studied at San Rafael National High School from Grade 7 to Grade 10, where I completed my Junior High School education. My time in San Rafael National High School was filled with meaningful experiences that helped me grow both academically and personally. It was during these years that I developed a strong sense of discipline, responsibility, and determination toward my studies. The lessons I learned and the support I received from my teachers and classmates motivated me to do my best and prepared me well for Senior High School. My junior high journey in San Rafael National High School became a solid foundation for my continuous learning and pursuit of higher education.',
  },
  {
    id: 4,
    school: 'Goa Central School',
    degree: 'Elementary Graduate',
    years: '(2012–2017)',
    image: '/images/goacentral.png',
    details: 'I spent my elementary years at Goa Central School, although I transferred there when I was in Grade 2. My time in the school was both enjoyable and meaningful, as it became the place where I built the foundation of my education and developed a genuine love for learning. At Goa Central School, I gained essential knowledge and skills in reading, writing, and arithmetic that prepared me for the next stages of my education. It was also during these years that I began to discover my interests and talents through different school activities. The support of my teachers and the friendships I formed there greatly contributed to shaping my character and values as a student.',
  }
]

function EducationCard({ edu, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="edu-card"
      style={{ animationDelay: `${0.3 + index * 0.3}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="edu-img">
        <Image
          src={edu.image}
          alt={edu.school}
          width={350}
          height={250}
          className="rounded-xl"
        />
      </div>
      <div className="edu-info">
        <h3>{edu.school}</h3>
        <p>
          {edu.degree}
          <br />
          {edu.years}
        </p>
      </div>
      <div className={`hidden-card ${isHovered ? 'visible' : ''}`}>
        <p><strong>{edu.details}</strong></p>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section className="section-transition pt-32 px-8 pb-12">
      <div className="edu-section">
        <h2>My Educational Background</h2>
        <div className="edu-container">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}