import { Package, Wrench, Rocket, Headphones } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Package,
      title: 'License Procurement',
      description: 'Seamless SAP Business One license acquisition tailored to your business needs'
    },
    {
      icon: Wrench,
      title: 'Customization with Add-Ons',
      description: 'Industry-specific add-ons and customizations for enhanced functionality'
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'Expert-guided implementation ensuring smooth transition and adoption'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your operations running'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-4">
          Embee – Your go-to SAP Business One Consulting and Implementation Partner
        </h2>
        <p className="text-[#555555] text-center mb-12 max-w-3xl mx-auto text-lg">
          Comprehensive end-to-end services to ensure your ERP success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0070BA] to-[#003366] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#0070BA] transition-colors duration-300">{service.title}</h3>
              <p className="text-[#555555] leading-relaxed">{service.description}</p>
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

export default Services;
