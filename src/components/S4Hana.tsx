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
    <section id="sap" className="py-12 sm:py-16 bg-gradient-to-r from-[#003366] to-[#0070BA] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Enterprise-Level Power: SAP S/4HANA Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Scale your business with next-generation intelligent ERP
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#003366]" />
                </div>
                <p className="text-lg font-medium leading-relaxed pt-2">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-white text-[#0070BA] px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Schedule a Free Consultation Call
          </button>
        </div>
      </div>
    </section>
  );
}

export default S4Hana;
