import { Award } from 'lucide-react';

function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-[#003366] via-[#0070BA] to-[#003366] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            World's #1 ERP for Small & Medium Enterprises
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Most trusted & secure ERP software to manage your entire small business operations
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <Award className="w-5 h-5 text-[#FFD700]" />
              <span className="text-sm font-semibold">SAP Emerging Partner of the Year 2022</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <Award className="w-5 h-5 text-[#FFD700]" />
              <span className="text-sm font-semibold">SAP Gold Partner India</span>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-white text-[#0070BA] px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Request SAP Business One ERP Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
