import { Linkedin } from 'lucide-react';

function Team() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      title: 'CEO & Founder',
      bio: 'Strategic visionary with 15+ years in SAP implementations',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Priya Sharma',
      title: 'VP, Implementation',
      bio: 'Expert in SAP Business One deployment and optimization',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Amit Patel',
      title: 'Technical Director',
      bio: 'Leads technical architecture and custom solutions',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Neha Gupta',
      title: 'Customer Success Lead',
      bio: 'Dedicated to ensuring client satisfaction and growth',
      image: 'https://images.pexels.com/photos/1181307/pexels-photo-1181307.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-[#555555] text-lg max-w-3xl mx-auto">
            Dedicated professionals committed to your SAP Business One success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0070BA] to-[#003366]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003366] mb-1">{member.name}</h3>
                <p className="text-[#0070BA] font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-[#555555] text-sm leading-relaxed mb-6">{member.bio}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#0070BA] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#005a94] transition-all transform hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
