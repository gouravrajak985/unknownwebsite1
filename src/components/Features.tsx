import { DollarSign, BarChart3, Users, ShoppingCart, Package2, FileText } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: DollarSign,
      title: 'Accounting & Financials',
      description: 'Complete financial management with real-time visibility'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Data-driven insights for informed decision making'
    },
    {
      icon: Users,
      title: 'Sales & CRM',
      description: 'Manage customer relationships and sales pipeline'
    },
    {
      icon: ShoppingCart,
      title: 'Purchasing & Supplier Management',
      description: 'Streamlined procurement and vendor management'
    },
    {
      icon: Package2,
      title: 'Inventory & Distribution',
      description: 'Optimize inventory levels and distribution channels'
    },
    {
      icon: FileText,
      title: 'Reporting & Administration',
      description: 'Comprehensive reporting and system administration'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12">
          Features of SAP Business One ERP
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all border-2 border-transparent hover:border-[#0070BA]/20"
            >
              <div className="w-12 h-12 bg-[#0070BA] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">{feature.title}</h3>
              <p className="text-[#555555] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#0070BA] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#005a94] transition-all transform hover:scale-105 shadow-lg"
          >
            Call for Expert Business Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
