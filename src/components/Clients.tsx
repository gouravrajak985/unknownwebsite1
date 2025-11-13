function Clients() {
  const clients = [
    { name: 'Google', logo: '/business%20logos/google_142143109e8.png' },
    { name: 'Starbucks', logo: '/business%20logos/starbucks_142223edc2a.png' },
    { name: 'Visa', logo: '/business%20logos/visa.png' },
    { name: 'Harvard', logo: '/business%20logos/harvard.png' },
    { name: 'Lacoste', logo: '/business%20logos/lacoste.png' },
    { name: 'Burger King', logo: '/business%20logos/burger-king.png' },
    { name: 'Doritos', logo: '/business%20logos/doritos.png' }
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12 animate-fade-in-up">
          Transforming 2500+ Organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 md:p-6 bg-[#F8FAFC] rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-[#003366] font-bold text-sm">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
