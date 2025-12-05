'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero({ setActiveSection }) {
  const [text, setText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ["Hi! I am Bell Anton", "Want to know me? Click more"]

  useEffect(() => {
    const TYPING_SPEED = 90
    const DELETING_SPEED = 50
    const PAUSE_AFTER_TYPING = 1400
    const PAUSE_AFTER_DELETING = 400

    const timeout = setTimeout(() => {
      const currentText = texts[textIndex]
      
      if (!isDeleting && charIndex < currentText.length) {
        setText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
        setTimeout(() => {}, PAUSE_AFTER_DELETING)
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section className="section-transition pt-24 px-8 pb-8">
      {/* Main Section with Profile and Education */}
      <div className="flex flex-wrap justify-between items-center gap-8 max-w-7xl mx-auto mb-12">
        {/* Profile Section */}
        <div className="flex-1 min-w-[300px] max-w-[50%] flex flex-col items-center text-center">
          <Image
            src="/images/profile.jpg"
            alt="Bell Anton"
            width={450}
            height={450}
            className="rounded-lg cursor-pointer hover-scale shadow-lg w-full max-w-[450px] h-auto"
            onClick={() => setActiveSection('personal-info')}
            priority
          />
          <h2 className="mt-4 text-xl md:text-2xl font-bold typing-cursor inline-block pr-2">
            {text}
          </h2>
          <button
            onClick={() => setActiveSection('personal-info')}
            className="mt-2 text-base md:text-lg hover:underline transition-all text-black dark:text-white"
          >
            more
          </button>
        </div>

        {/* Education Section */}
        <div className="flex-1 min-w-[300px] max-w-[50%] text-center">
          <div 
            className="cursor-pointer"
            onClick={() => setActiveSection('education')}
          >
            <div className="w-full rounded-xl flex items-center justify-center overflow-hidden p-8 bg-gray-50 dark:bg-gray-800">
              <Image
                src="/images/parsu.png"
                alt="Partido State University"
                width={700}
                height={400}
                className="hover-scale w-[80%] h-auto object-contain rounded-2xl"
              />
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-4">
              About my Educational Background
            </h2>
          </div>
        </div>
      </div>

      {/* Expertise Preview Section */}
      <div 
        className="w-full text-center mt-12 cursor-pointer"
        onClick={() => setActiveSection('expertise')}
      >
        <div className="w-full max-w-4xl mx-auto">
          <Image
            src="/images/expertise.png"
            alt="Expertise"
            width={700}
            height={200}
            className="mx-auto hover-scale rounded-lg w-[80%] max-w-[700px] mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mt-4 mb-2">Expertise</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-justify px-4">
            These are some of the areas in which I possess a basic level of knowledge and understanding. 
            While my expertise in these topics is still developing, I have gained enough familiarity to 
            grasp fundamental concepts and engage in introductory discussions. I am also eager to continue 
            expanding my skills and deepening my comprehension through further learning and hands-on experience.
          </p>
        </div>
      </div>
    </section>
  )
}