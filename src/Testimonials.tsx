import { useEffect, useState } from "react";

const data = [
  { text: "Since I bought the Colar 3600, I haven't turned on my 'I-better-pass-my-neighbor' generator. It carries my deep freezer and inverter AC perfectly. Pure silence!", author: "Engr. Emeka", location: "Lekki, Lagos" },
  { text: "My pharmacy relies on 24/7 cooling for vaccines. This system has been a lifesaver with the current fuel prices. The 400W panels charge it so fast.", author: "Dr. Bukola", location: "Ibadan, Oyo" },
  { text: "Real heavy-duty stuff. It handles my microwave and electric kettle without tripping. Delivery to Kano was secure and the packaging was top-notch.", author: "Alhaji Musa", location: "Kano State" },
  { text: "The 2-year warranty gave me peace of mind. I've had it for 4 months now and it still performs like day one. Best investment for my home office.", author: "Mrs. Joy", location: "Port Harcourt" },
  { text: "Finally, a solar system that actually does what the video says. No more sleeping in heat or worrying about fuel scarcity. Highly recommended!", author: "Segun", location: "Gwarinpa, Abuja" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide only active on mobile/tablet where we show one card
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % data.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 px-4 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Real Stories, Real Power
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl max-w-2xl mx-auto">
            Join 500+ Nigerian homes and businesses already enjoying 24/7 silent electricity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          
          {/* LEFT: The Social Proof Grid/Slider */}
          <div className="w-full lg:w-2/3">
            
            {/* MOBILE VIEW: Single Card Slider */}
            <div className="lg:hidden">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 min-h-[220px] flex flex-col justify-center relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic font-medium">
                  "{data[index].text}"
                </p>
                <div className="mt-6">
                  <p className="text-sm font-black text-slate-900 uppercase">{data[index].author}</p>
                  <p className="text-xs text-slate-500 font-bold">{data[index].location}</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center gap-2">
                {data.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-amber-500' : 'w-2 bg-slate-300'}`} />
                ))}
              </div>
            </div>

            {/* PC VIEW: Static Grid (No waiting for slider) */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {data.slice(0, 4).map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, star) => (
                        <span key={star} className="text-amber-500 text-sm">⭐</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-black bg-green-50 text-green-700 px-2 py-1 rounded-md uppercase tracking-tighter">
                      Verified Purchase
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 font-medium">"{item.text}"</p>
                  <div>
                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.author}</p>
                    <p className="text-xs text-slate-400 font-bold">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Proof of Delivery Image (Sticky on PC) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white transform hover:-rotate-1 transition-transform">
                <img
                  src="/cust.png"
                  alt="Colar 3600 Customer Delivery"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md p-4 text-white">
                  <p className="text-[10px] uppercase font-black tracking-widest text-amber-500 mb-1">Live Update</p>
                  <p className="text-xs font-bold leading-tight">
                    📦 Dispatch completed for customer in Gwarinpa, Abuja (24hrs ago)
                  </p>
                </div>
              </div>
              
              {/* Trust Stats below image on PC */}
              <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900 p-4 rounded-2xl text-center">
                  <p className="text-amber-500 font-black text-xl">500+</p>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Units Sold</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl text-center">
                  <p className="text-amber-500 font-black text-xl">4.9/5</p>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Rating</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}