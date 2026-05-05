import { useEffect, useState } from "react";

const data = [
  { text: "Since I bought the Colar 3600, I haven't turned on my 'I-better-pass-my-neighbor' generator. It carries my deep freezer and inverter AC perfectly. Pure silence!", author: "- Engr. Emeka from Lekki" },
  { text: "My pharmacy relies on 24/7 cooling for vaccines. This system has been a lifesaver with the current fuel prices. The 400W panels charge it so fast.", author: "- Dr. Bukola from Ibadan" },
  { text: "Real heavy-duty stuff. It handles my microwave and electric kettle without tripping. Delivery to Kano was secure and the packaging was top-notch.", author: "- Alhaji Musa from Kano" },
  { text: "The 2-year warranty gave me peace of mind. I've had it for 4 months now and it still performs like day one. Best investment for my home office.", author: "- Mrs. Joy from Port Harcourt" },
  { text: "Finally, a solar system that actually does what the video says. No more sleeping in heat or worrying about fuel scarcity. Highly recommended!", author: "- Segun from Gwarinpa" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % data.length),
      5000 // Slightly longer for people to read the more detailed reviews
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-2">
          Real Stories, Real Power
        </h2>
        <p className="text-center text-slate-500 mb-8 text-sm">Join 500+ Nigerian homes and businesses already off the grid.</p>

        {/* Testimonial Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mb-8 min-h-[180px] flex flex-col justify-center transition-all duration-500 transform">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-500 text-xl">⭐</span>
            ))}
          </div>
          <p className="text-slate-700 text-base leading-relaxed font-medium">
            "{data[index].text}"
          </p>
          <p className="text-sm font-black text-slate-900 mt-4 uppercase tracking-wider">{data[index].author}</p>
        </div>

        {/* PROOF OF DELIVERY IMAGE */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
            <img
              src="/cust.png" // Change this to an image of the generator arriving at a house
              alt="Colar 3600 Customer Delivery"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 backdrop-blur-md p-3 text-white text-center text-xs font-bold">
              📸 Actual delivery to a customer in Abuja last week
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center gap-2">
          {data.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-amber-500' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}