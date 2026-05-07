export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-12 px-4 text-center border-b-4 border-amber-500">
      <div className="max-w-xl mx-auto">
        {/* Trust Badge / Urgency */}
        <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Limited Stock Available in Lagos & Abuja
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
          Say Goodbye to "No Light" & Expensive Fuel Forever!
        </h1>

        <p className="text-lg md:text-xl text-slate-700 mb-8 font-semibold">
          Power your Fridge, AC, Plasma TV, and Pump Price-Free with the <span className="text-amber-600">Colar 3600W</span> Heavy-Duty Solar Generator.
        </p>

        {/* Video/Product Showcase */}
        <div className="bg-slate-900 h-72 md:h-96 rounded-2xl mb-8 overflow-hidden shadow-2xl relative border-4 border-white">
          <video
            src="/cola.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">
            Silent Operation - No Noise!!
          </div>
        </div>

        {/* Pricing Psychology: High Value + Massive Discount */}
        <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
          <p className="text-base text-slate-500 line-through">
            Market Price: ₦1,550,000
          </p>
          <p className="text-4xl md:text-5xl font-black text-red-600">
            Promo Price: ₦959,999
          </p>
          <p className="text-sm font-bold text-green-600 mt-2">
            ✓ Includes Free 400W Solar Panel + Installation Guide
          </p>
        </div>

        <a
          href="#order-form"
          className="block w-full bg-green-600 text-white font-extrabold text-2xl py-5 rounded-xl shadow-xl hover:bg-green-700 transition transform hover:scale-105 active:scale-95 border-b-4 border-green-800"
        >
          ORDER NOW — PAY ON DELIVERY
        </a>
        
        <p className="mt-4 text-slate-500 text-sm flex items-center justify-center gap-2">
          <span>🛡️ 2-Year Warranty</span> • <span>🚚 Fast Nationwide Delivery</span>
        </p>
      </div>
    </section>
  );
}