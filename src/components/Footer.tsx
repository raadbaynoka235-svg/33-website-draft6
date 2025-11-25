export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
    
        {/* LEFT SECTION */}
        <div>
          <img src="/Final Logo.png" alt="33 Logo" className="w-16 mb-4" />
    
        </div>
    
        {/* RIGHT SECTION */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Contact</h4>
          <p className="text-sm">33@lmsthinking.com</p>
        </div>
    
      </div>
    
      {/* COPYRIGHT SECTION */}
    </footer>
  );
}
