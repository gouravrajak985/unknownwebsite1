import { Mail, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-50/80 backdrop-blur-md sticky top-0 z-[999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="text-xl md:text-2xl font-bold text-[#003366]">EMBEE</div>
              <div className="h-6 md:h-8 w-px bg-[#003366]/30"></div>
              <div className="text-xs md:text-sm font-semibold text-[#003366]">SAP Business One</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium text-sm lg:text-base">Home</a>
            <a href="#sap" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium text-sm lg:text-base">SAP Business One</a>
            <a href="#services" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium text-sm lg:text-base">Services</a>
            <a href="#about" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium text-sm lg:text-base">About</a>
            <a href="#contact" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium text-sm lg:text-base">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="mailto:connect@embee.co.in" className="hidden xl:flex items-center space-x-2 text-[#003366] hover:text-[#0070BA] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">connect@embee.co.in</span>
            </a>
            <a href="tel:+918447877367" className="hidden lg:flex items-center space-x-2 text-[#003366] hover:text-[#0070BA] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 8447877367</span>
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden text-[#003366] p-2 hover:bg-[#003366]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" onClick={toggleMenu} className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2">Home</a>
              <a href="#sap" onClick={toggleMenu} className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2">SAP Business One</a>
              <a href="#services" onClick={toggleMenu} className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2">Services</a>
              <a href="#about" onClick={toggleMenu} className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2">About</a>
              <a href="#contact" onClick={toggleMenu} className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2">Contact</a>
              <a href="mailto:connect@embee.co.in" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>connect@embee.co.in</span>
              </a>
              <a href="tel:+918447877367" className="text-[#003366] hover:text-[#0070BA] transition-colors font-medium py-2 flex items-center space-x-2">
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
