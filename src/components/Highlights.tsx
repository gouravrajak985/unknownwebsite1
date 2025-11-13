import { Clock, Globe, Cpu, Award, Users } from 'lucide-react';

function Highlights() {
  const highlights = [
    {
      icon: Clock,
      title: '15+ Years',
      description: 'Implementing SAP Solutions'
    },
    {
      icon: Globe,
      title: 'Global Customers',
      description: 'Serving businesses worldwide'
    },
    {
      icon: Cpu,
      title: 'Intelligent ERP',
      description: 'AI, IoT Integration'
    },
    {
      icon: Award,
      title: 'SAP Gold Partner',
      description: 'Certified Excellence'
    },
    {
      icon: Users,
      title: '500+ Customers',
      description: 'Trust our expertise'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-[#F8FAFC] rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0070BA] to-[#003366] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 group-hover:shadow-lg animate-pulse">
                <highlight.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0070BA] mb-2 group-hover:text-[#003366] transition-colors duration-300">{highlight.title}</h3>
              <p className="text-[#555555] group-hover:text-[#0070BA] transition-colors duration-300">{highlight.description}</p>
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

export default Highlights;
