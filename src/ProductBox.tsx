export default function ProductBox() {
  const boxItems = [
    { name: "Colar 3600 Power Station (3600W/3.6kWh)", desc: "The main heavy-duty unit with LiFePO4 cells." },
    { name: "400W Monocrystalline Solar Panel", desc: "High-efficiency panel for rapid sun-charging." },
    { name: "AC Charging Cable", desc: "For fast charging via NEPA or your existing generator." },
    { name: "MC4 to XT60 Solar Cable", desc: "Heavy-duty 5-meter cable to connect panels to the unit." },
    { name: "Car Charging Adapter", desc: "Charge your system while driving on long trips." },
    { name: "User Manual & 2-Year Warranty Card", desc: "Full guide on load management and maintenance." }
  ];

  return (
    <section className="py-16 px-4 bg-slate-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
        
        {/* Product Hero Image/Video */}
        <div className="rounded-2xl mb-10 overflow-hidden shadow-inner bg-slate-50 border border-slate-100">
          <video
            src="/colagif.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <span className="text-amber-500">📦</span> Inside the Package
        </h2>

        {/* Improved List with Descriptions */}
        <div className="space-y-4">
          {boxItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0">
              <div className="mt-1 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base">{item.name}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Added Value Badge */}
        <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-4">
          <div className="text-3xl">🎁</div>
          <div>
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Limited Offer Bonus</p>
            <p className="text-sm text-amber-900 font-medium">Free Heavy-Duty Protective Cover included in this batch.</p>
          </div>
        </div>

      </div>
    </section>
  );
}