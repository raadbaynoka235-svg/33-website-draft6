interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="transition-opacity"
        >
          <img
            src="/Final Logo.png"
            alt="33 Logo"
            className="h-8 w-auto md:h-10 object-contain opacity-0 animate-fade-in"
          />
      </button>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('application')}
            className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
}
