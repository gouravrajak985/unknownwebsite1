import { Award } from 'lucide-react';

function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-[#003366] via-[#0070BA] to-[#003366] text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            World's #1 ERP for Small & Medium Enterprises
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-2">
            Most trusted & secure ERP software to manage your entire small business operations
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 w-full sm:w-auto justify-center">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">SAP Emerging Partner of the Year 2022</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 w-full sm:w-auto justify-center">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">SAP Gold Partner India</span>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-white text-[#0070BA] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl mx-4"
          >
            Request SAP Business One ERP Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
