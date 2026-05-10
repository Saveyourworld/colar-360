export default function HeroSection() {
  return (
    <section className="relative bg-slate-50 py-12 lg:py-24 px-4 border-b-4 border-amber-500 overflow-hidden">
      {/* Subtle Background Accent for PC */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-20" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: The Sales Copy */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm">
              🚀 Limited Stock: Lagos & Abuja Hubs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
              Say Goodbye to <span className="text-red-600">"No Light"</span> & Expensive Fuel Forever!
            </h1>

            <p className="text-lg md:text-xl text-slate-700 mb-8 font-medium leading-relaxed max-w-2xl">
              Power your Fridge, AC, and Water Pump price-free with the 
              <span className="text-amber-600 font-bold"> Colar 3600W</span> — the ultimate heavy-duty silent backup.
            </p>

            {/* Price Card: Optimized for Trust */}
            <div className="mb-8 p-6 bg-white rounded-2xl shadow-xl border border-slate-200 lg:max-w-md inline-block w-full">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 justify-center lg:justify-start">
                <span className="text-slate-400 line-through text-lg">₦1,550,000</span>
                <span className="text-4xl md:text-5xl font-black text-red-600">₦959,999</span>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-green-700 font-bold flex items-center justify-center lg:justify-start gap-2">
                  ✅ Free 400W Solar Panel Included
                </p>
                <p className="text-slate-600 text-sm flex items-center justify-center lg:justify-start gap-2">
                  🚚 Free Delivery + Professional Setup Guide
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="#order-form"
                className="block lg:inline-block lg:px-12 bg-green-600 text-white font-black text-2xl py-6 rounded-2xl shadow-2xl hover:bg-green-700 transition transform hover:scale-105 active:scale-95 border-b-8 border-green-800 text-center"
              >
                ORDER NOW — PAY ON DELIVERY
              </a>
              <p className="text-slate-500 text-sm font-medium">
                🛡️ 2-Year Warranty • ⚡ Instant Switchover (UPS)
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Visual Proof */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white aspect-video lg:aspect-square">
                <video
                  src="/cola.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-xl font-black text-xs md:text-sm shadow-lg animate-pulse">
                  NOISELESS OPERATION
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl font-bold text-slate-900 text-xs shadow-lg border border-slate-200">
                  ⚡ 3600W Industrial Capacity
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}