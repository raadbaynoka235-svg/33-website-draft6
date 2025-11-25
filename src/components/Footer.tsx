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
          <p className="text-sm">TK: 0452199479</p>
          <p className="text-sm">JJ: </p>
        </div>
    
      </div>
    
      {/* COPYRIGHT SECTION */}
      <div className="border-t border-gray-900 mt-12 pt-6">
        <p className="text-xs text-center tracking-wider text-gray-600">
          © {new Date().getFullYear()} 33 — Private Members Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
