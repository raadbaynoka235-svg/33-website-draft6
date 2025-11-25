import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Application from './components/Application';
// import Privileges from './components/Privileges';
// import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      {/* <About /> */}
      {/* <Privileges /> */}
      {/* <Philosophy /> */}
      <Application />
      <Footer />
    </div>
  );
}

export default App;
