import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex flex-col items-center justify-center relative"
    >
      <div
        className={`text-center transition-all duration-1500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <img
          src="/Final Logo.png"
          alt="33 Logo"
          className="w-[180px] md:w-[260px] lg:w-[300px] mx-auto mb-8"
        />
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </button>
    </section>
  );
}
