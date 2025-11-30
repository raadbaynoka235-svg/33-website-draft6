import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      {/* Top Divider */}
      <div className="border-t border-gray-900 mb-12"></div>

      {/* Centered Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/Final Logo.png"
            alt="33 Logo"
            className="h-14 w-auto mb-3 opacity-100"
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-2">
            Contact
          </h4>
          <p className="text-sm text-gray-300">33@lmsthinking.com</p>
          <p className="text-sm text-gray-300">Sydney, Australia</p>
        </div>

      </div>
 
      {/* Bottom Divider */}
      <div className="mt-12 border-t border-gray-900"></div>
    </footer>
  );
}