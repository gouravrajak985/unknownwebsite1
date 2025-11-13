import { Mail, Phone } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-[#0070BA]">EMBEE</div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-sm font-semibold text-[#003366]">SAP Business One</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#222222] hover:text-[#0070BA] transition-colors font-medium">Home</a>
            <a href="#sap" className="text-[#222222] hover:text-[#0070BA] transition-colors font-medium">SAP Business One</a>
            <a href="#services" className="text-[#222222] hover:text-[#0070BA] transition-colors font-medium">Services</a>
            <a href="#about" className="text-[#222222] hover:text-[#0070BA] transition-colors font-medium">About</a>
            <a href="#contact" className="text-[#222222] hover:text-[#0070BA] transition-colors font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-6">
            <a href="mailto:connect@embee.co.in" className="hidden lg:flex items-center space-x-2 text-[#555555] hover:text-[#0070BA] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">connect@embee.co.in</span>
            </a>
            <a href="tel:+918447877367" className="hidden lg:flex items-center space-x-2 text-[#555555] hover:text-[#0070BA] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 8447877367</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
