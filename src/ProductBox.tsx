export default function ProductBox() {
  const boxItems = [
    { name: "Colar 3600 Power Station", spec: "3600W / 3.6kWh", desc: "Industrial-grade main unit with LiFePO4 cells." },
    { name: "400W Mono Solar Panel", spec: "High-Efficiency", desc: "Rapid sun-charging monocrystalline panel." },
    { name: "AC Charging Cable", spec: "Fast Charge", desc: "For high-speed charging via grid or generator." },
    { name: "MC4 to XT60 Solar Cable", spec: "5-Meter Reach", desc: "Heavy-duty outdoor-rated connection cable." },
    { name: "Car Charging Adapter", spec: "12V/24V", desc: "Juice up your system while driving." },
    { name: "Warranty & Manual", spec: "2-Year Cover", desc: "Full guide on load management and protection." }
  ];

  return (
    <section className="py-16 lg:py-32 px-4 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header for PC */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">What’s In The Box?</h2>
          <p className="text-slate-500 text-lg">Everything you need for immediate energy independence.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT/TOP: Product Visual Showcase */}
          <div className="w-full lg:w-1/2 bg-slate-50 p-6 lg:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="relative group w-full">
              {/* Decorative background element for the video */}
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <video
                  src="/colagif.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Tech Specs for PC View */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-amber-500 font-black text-2xl">3.6kWh</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Storage Capacity</p>
              </div>
            </div>
          </div>

          {/* RIGHT/BOTTOM: Items Breakdown */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="bg-amber-100 p-2 rounded-lg text-xl">📦</span> 
              Full Package Checklist
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {boxItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-lg leading-tight">{item.name}</h4>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase tracking-tighter">
                        {item.spec}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus Section */}
            <div className="mt-12 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 flex items-center gap-5">
              <div className="text-4xl animate-bounce">🎁</div>
              <div>
                <p className="text-xs font-black text-amber-800 uppercase tracking-widest">Exclusive Bonus</p>
                <p className="text-slate-900 font-bold">Free Heavy-Duty Protective Cover</p>
                <p className="text-xs text-amber-700 mt-0.5">Custom-fitted for the Colar 3600 unit ($45 Value).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}