import { useState } from 'react';
import { Shield } from 'lucide-react';

function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    designation: '',
    company: '',
    state: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-12 animate-fade-in-up hover:bg-white/70 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 text-center animate-fade-in-up">
            Get Your Free ERP Demo
          </h2>
          <p className="text-[#555555] text-center mb-8 animate-fade-in-up animation-delay-200">
            Fill out the form below and our experts will contact you shortly
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Work Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="designation"
                placeholder="Designation *"
                required
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name *"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
              />
            </div>

            <input
              type="text"
              name="state"
              placeholder="State *"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all"
            />

            <textarea
              name="requirement"
              placeholder="Requirement Description"
              rows={4}
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F4F7FA] rounded-md border border-gray-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/20 outline-none transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0070BA] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#005a94] transition-all transform hover:scale-[1.02] shadow-lg"
            >
              Submit
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-[#555555]">
            <Shield className="w-4 h-4 text-[#0070BA]" />
            <span>We value your privacy. See our</span>
            <a href="https://embee.co.in/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#0070BA] hover:underline font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
