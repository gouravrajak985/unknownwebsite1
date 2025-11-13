import { Zap, TrendingUp, Network } from 'lucide-react';

function S4Hana() {
  const features = [
    {
      icon: Zap,
      text: 'Real-time analytics and AI features'
    },
    {
      icon: TrendingUp,
      text: 'Advanced financial management'
    },
    {
      icon: Network,
      text: 'Streamlined supply chain'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sap" className="py-12 sm:py-16 bg-transparent text-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]">
            Unlock Enterprise-Level Power: SAP S/4HANA Solutions
          </h2>
          <p className="text-xl text-[#0070BA] max-w-3xl mx-auto">
            Scale your business with next-generation intelligent ERP
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#0070BA]/20 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up group hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0070BA] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300 group-hover:shadow-lg">
                  <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-lg font-medium leading-relaxed pt-2 text-[#003366] group-hover:text-[#0070BA] transition-colors duration-300">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#0070BA] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#005a94] transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Free Consultation Call
          </button>
        </div>
      </div>
    </section>
  );
}

export default S4Hana;
