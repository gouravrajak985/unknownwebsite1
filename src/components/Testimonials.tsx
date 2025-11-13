import { Quote, TrendingDown, Clock, CheckCircle, TrendingUp } from 'lucide-react';

function Testimonials() {
  const successMetrics = [
    {
      icon: TrendingDown,
      title: 'Reduced Inventory Costs',
      description: 'Optimized stock management'
    },
    {
      icon: Clock,
      title: 'Reduced Turnaround Times',
      description: 'Faster operations'
    },
    {
      icon: CheckCircle,
      title: 'Elimination of Manual Processes',
      description: 'Automated workflows'
    },
    {
      icon: TrendingUp,
      title: 'Improved Profits',
      description: 'Seamless integration'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12">
          Helping Customers Steer Their Digital Transformation
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12 mb-12">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#0070BA] flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-4">IFGL Refractories Ltd</h3>
              <p className="text-[#555555] text-base sm:text-lg leading-relaxed mb-4">
                "Our unintegrated processes led to duplication of data, lack of real-time business visibility, and long turnaround times. The solution helped us achieve automation and integration."
              </p>
              <p className="text-[#0070BA] font-semibold">– Group IT Head</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0070BA] to-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">{metric.title}</h3>
              <p className="text-[#555555] text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#0070BA] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#005a94] transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
