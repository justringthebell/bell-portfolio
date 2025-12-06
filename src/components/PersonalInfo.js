import Image from 'next/image'

export default function PersonalInfo() {
  return (
    <section className="section-transition pt-32 px-8 pb-12">
      <div className="edu-section">
        <h2>About Me</h2>
        <Image
          src="/images/profile.jpg"
          alt="Bell Anton"
          width={230}
          height={230}
          className="rounded mx-auto mb-4"
        />
        <h4 className="text-2xl font-semibold mb-6 text-black dark:text-white">Hi! I am Bell Anton</h4>
        <div className="personal-info-text">
          <p>
            I am <strong>Bell Anton Parola Mahometano</strong>, a third-year Bachelor of Science in 
            Computer Science student at <strong>Partido State University</strong>. I currently live on 
            San Juan Bautista Street, Goa, Camarines Sur. As a computer science student, I am passionate 
            about exploring the world of technology, programming, and innovation. I enjoy learning how 
            computers work, developing software, and finding creative solutions to real-world problems 
            through coding and logical thinking.
          </p>
          <p>
            Throughout my academic journey, I have been building my knowledge and skills in areas such 
            as programming languages, algorithms, web development, and system design. I am determined to 
            enhance my technical expertise and apply what I learn to practical projects that can make a 
            positive impact in my community and future workplace.
          </p>
          <p>
            Aside from academics, I value discipline, perseverance, and continuous learning. I aim to 
            pursue a successful career in the field of information technology or software development, 
            where I can contribute to advancing modern digital solutions while continuing to grow as a 
            professional and individual.
          </p>
        </div>
      </div>
    </section>
  )
}