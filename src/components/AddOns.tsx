import { Truck, ClipboardCheck, FileSpreadsheet, Cog } from 'lucide-react';

function AddOns() {
  const addons = [
    {
      icon: Truck,
      title: 'emLOGiSTICS',
      description: 'Contract Management, Billing, and comprehensive logistics solutions'
    },
    {
      icon: ClipboardCheck,
      title: 'emQC',
      description: 'Quality Control Add-On for maintaining product standards'
    },
    {
      icon: FileSpreadsheet,
      title: 'emGSTR',
      description: 'GST returns management specifically designed for India'
    },
    {
      icon: Cog,
      title: 'emPPC',
      description: 'Production Planning Control for manufacturing excellence'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-4">
          Embee's SAP-accredited Add-Ons
        </h2>
        <p className="text-[#555555] text-center mb-12 max-w-3xl mx-auto text-lg">
          Industry-specific solutions to enhance your SAP Business One experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up group hover-lift"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 group-hover:shadow-lg">
                <addon.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#FFD700] transition-colors duration-300">{addon.title}</h3>
              <p className="text-[#555555] leading-relaxed">{addon.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#0070BA] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#005a94] transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddOns;
