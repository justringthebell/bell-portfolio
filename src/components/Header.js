'use client'

export default function Header({ activeSection, setActiveSection }) {
  const handleNavigation = (section) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#5a5959] border-b-2 border-black dark:border-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
        <h1 
          onClick={() => handleNavigation('home')}
          className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity text-black dark:text-white"
        >
          Home
        </h1>
        <nav className="flex gap-12 items-center">
          <button
            onClick={() => handleNavigation('contact')}
            className="hover:underline transition-all text-black dark:text-white text-base font-medium"
          >
            Contact Me
          </button>
          <a
            href="https://forms.gle/1zPDZVMVm76JgHv47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all text-black dark:text-white text-base font-medium"
          >
            Rate Me
          </a>
        </nav>
      </div>
    </header>
  )
}