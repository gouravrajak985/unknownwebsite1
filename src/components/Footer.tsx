function Footer() {
  return (
    <footer id="contact" className="bg-transparent text-[#003366] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#0070BA]">EMBEE SOFTWARE</h3>
            <p className="text-[#555555] mb-4">
              Your trusted SAP Business One partner for digital transformation
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#003366]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[#555555] hover:text-[#0070BA] transition-colors">Home</a></li>
              <li><a href="#sap" className="text-[#555555] hover:text-[#0070BA] transition-colors">SAP Business One</a></li>
              <li><a href="#services" className="text-[#555555] hover:text-[#0070BA] transition-colors">Services</a></li>
              <li><a href="#about" className="text-[#555555] hover:text-[#0070BA] transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#003366]">Contact Us</h4>
            <ul className="space-y-2 text-[#555555]">
              <li>Email: connect@embee.co.in</li>
              <li>Phone: +91 8447877367</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#003366]/20 pt-8 text-center text-[#555555]">
          <p>© 2025 EMBEE SOFTWARE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
