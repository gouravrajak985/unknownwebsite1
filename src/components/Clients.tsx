function Clients() {
  const clients = [
    { name: 'NGB Bearings', logo: 'https://www.ngbbearings.com/images/ngb-logo.png' },
    { name: 'Pooja Forge', logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Fischer', logo: 'https://www.fischerindia.com/static/media/fischer-logo.png' },
    { name: 'Joveo', logo: 'https://www.joveo.com/wp-content/uploads/2021/09/joveo-logo.svg' },
    { name: 'IFGL Refractories', logo: 'https://www.ifgl.net/images/ifgl-logo.png' },
    { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Mahindra_Logo.png' },
    { name: 'Apollo Tyres', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Apollo_Tyres_logo.svg/200px-Apollo_Tyres_logo.svg.png' },
    { name: 'Jindal Steel', logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12">
          Transforming 2500+ Organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 md:p-6 bg-[#F8FAFC] rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-full h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
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
