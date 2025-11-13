function Clients() {
  const clients = [
    'NGB', 'Pooja Forge', 'Fischer', 'Joveo', 'Refractory',
    'Global Tech', 'Inno Solutions', 'Prime Industries'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12">
          Transforming 2500+ Organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-[#F8FAFC] rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="w-32 h-16 flex items-center justify-center bg-gradient-to-br from-[#0070BA]/10 to-[#003366]/10 rounded-md">
                  <span className="text-[#003366] font-bold text-sm">{client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
