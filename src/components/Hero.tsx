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
    {/* main content */}
    <div className="page-container flex flex-col items-center">
      {/* your logo image */}
      <img
        src="/Final Logo.png"
        alt="33 Logo"
        className="w-[180px] md:w-[260px] lg:w-[300px] mx-auto mb-8"
      />
    </div>

    {/* arrow – perfectly centered under the logo */}
    <div className="page-container flex justify-center mt-16 mb-10">
      <ChevronDown className="w-8 h-8 text-gray-600" />
    </div>
  </section>
);
}
