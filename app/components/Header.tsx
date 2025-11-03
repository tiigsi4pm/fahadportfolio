'use client';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent py-4">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">portfolio</div>
        <div className="flex gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}