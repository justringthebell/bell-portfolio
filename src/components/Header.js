'use client'

export default function Header({ activeSection, setActiveSection }) {
  const handleNavigation = (section) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#5a5959] border-b-2 border-black dark:border-white z-50 px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 
          onClick={() => handleNavigation('home')}
          className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
        >
          Home
        </h1>
        <nav className="flex gap-6">
          <button
            onClick={() => handleNavigation('contact')}
            className="hover:underline transition-all"
          >
            Contact Me
          </button>
          <a
            href="https://forms.gle/1zPDZVMVm76JgHv47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
          >
            Rate Me
          </a>
        </nav>
      </div>
    </header>
  )
}