export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/Final Logo.png"
              alt="33 Logo"
              className="w-12 h-auto opacity-90"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              Private Members Club Sydney
              <br />
              Exclusivity Refined. Opportunity Redefined.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>members@33club.sydney</p>
              <p>Sydney, Australia</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-4">
              Legal
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center">
          <p className="text-xs tracking-wider text-gray-700">
            © {new Date().getFullYear()} 33 — Private Members Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
