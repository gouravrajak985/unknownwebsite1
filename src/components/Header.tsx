import { Mail, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-br from-[#003366] via-[#0070BA] to-[#003366] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="text-xl md:text-2xl font-bold text-white">EMBEE</div>
              <div className="h-6 md:h-8 w-px bg-white/30"></div>
              <div className="text-xs md:text-sm font-semibold text-white">SAP Business One</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-white hover:text-[#FFD700] transition-colors font-medium text-sm lg:text-base">Home</a>
            <a href="#sap" className="text-white hover:text-[#FFD700] transition-colors font-medium text-sm lg:text-base">SAP Business One</a>
            <a href="#services" className="text-white hover:text-[#FFD700] transition-colors font-medium text-sm lg:text-base">Services</a>
            <a href="#about" className="text-white hover:text-[#FFD700] transition-colors font-medium text-sm lg:text-base">About</a>
            <a href="#contact" className="text-white hover:text-[#FFD700] transition-colors font-medium text-sm lg:text-base">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="mailto:connect@embee.co.in" className="hidden xl:flex items-center space-x-2 text-white hover:text-[#FFD700] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">connect@embee.co.in</span>
            </a>
            <a href="tel:+918447877367" className="hidden lg:flex items-center space-x-2 text-white hover:text-[#FFD700] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 8447877367</span>
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3">
              <a href="#home" onClick={toggleMenu} className="text-white hover:text-[#FFD700] transition-colors font-medium py-2">Home</a>
              <a href="#sap" onClick={toggleMenu} className="text-white hover:text-[#FFD700] transition-colors font-medium py-2">SAP Business One</a>
              <a href="#services" onClick={toggleMenu} className="text-white hover:text-[#FFD700] transition-colors font-medium py-2">Services</a>
              <a href="#about" onClick={toggleMenu} className="text-white hover:text-[#FFD700] transition-colors font-medium py-2">About</a>
              <a href="#contact" onClick={toggleMenu} className="text-white hover:text-[#FFD700] transition-colors font-medium py-2">Contact</a>
              <a href="mailto:connect@embee.co.in" className="text-white hover:text-[#FFD700] transition-colors font-medium py-2 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>connect@embee.co.in</span>
              </a>
              <a href="tel:+918447877367" className="text-white hover:text-[#FFD700] transition-colors font-medium py-2 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 8447877367</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
