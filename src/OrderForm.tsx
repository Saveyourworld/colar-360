import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function OrderForm() {
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const unitPrice = 959999;
  const originalPrice = 1550000; 
  const total = unitPrice * quantity;
  const totalSaved = (originalPrice - unitPrice) * quantity;

  const whatsappNumber = "2349064543927";

  const otherProducts = [
    { id: 1, name: "Extra Solar Panels", link: "#", img: "☀️" },
    { id: 2, name: "Smart Inverter", link: "#", img: "📟" },
    { id: 3, name: "Expansion Battery", link: "#", img: "🔋" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("customer_name") as string;
    const phone = formData.get("customer_phone") as string;
    const address = formData.get("customer_address") as string;
    const state = formData.get("customer_note") as string;

    const message = `🚀 NEW ORDER: COLAR 3600 SOLAR GENERATOR\n\n👤 Name: ${fullName}\n📞 Phone: ${phone}\n📍 Address: ${address}\n🗺️ State: ${state}\n📦 Quantity: ${quantity}\n💰 Total Amount: ₦${total.toLocaleString()}`.trim();
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setShowModal(true);
      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.warn("Proceeding via WhatsApp fallback.", error);
      setShowModal(true);
      window.open(whatsappURL, "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order-form" className="py-16 lg:py-24 px-4 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Responsive Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-100 text-amber-800 p-2 px-4 rounded-full text-xs font-bold mb-4 border border-amber-200 animate-pulse">
            🔥 Limited Stock: Only 5 Units Left at this Price
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Claim Your Energy Freedom</h2>
          <p className="text-slate-500 text-lg">Pay on Delivery available nationwide. Free shipping today.</p>
        </div>

        {/* 2-Column Layout for PC */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Side: The Form */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="bg-white p-6 lg:p-10 rounded-3xl border border-slate-200 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="customer_name" placeholder="Full Name" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition bg-slate-50" required />
                <input type="tel" name="customer_phone" placeholder="WhatsApp Number" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition bg-slate-50" required />
              </div>
              <input type="text" name="customer_address" placeholder="Full Delivery Address" className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition bg-slate-50" required />
              <input type="text" name="customer_note" placeholder="State & City" className="w-full mb-6 p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition bg-slate-50" required />

              <button 
                type="submit" 
                disabled={loading} 
                className={`w-full text-white font-black text-xl lg:text-2xl py-6 rounded-2xl transition-all shadow-2xl ${
                  loading ? "bg-slate-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 hover:-translate-y-1 active:scale-95"
                }`}
              >
                {loading ? "PROCESSING..." : "CONFIRM ORDER — PAY ON DELIVERY"}
              </button>
              
              <div className="flex justify-center items-center gap-4 mt-6 opacity-50">
                <span className="text-[10px] font-black uppercase tracking-tighter italic">Secured by SSL</span>
                <span className="text-[10px] font-black uppercase tracking-tighter italic">Lagos Warehouse Ready</span>
              </div>
            </form>
          </div>

          {/* Right Side: Price Summary & Logic */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 sticky top-8">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl border-b-8 border-slate-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-amber-500">🛒</span> Order Summary
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Colar 3600W Unit</span>
                  <span>₦{unitPrice.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Quantity</span>
                  <div className="flex items-center gap-3 bg-slate-800 px-3 py-1 rounded-lg">
                    <button type="button" onClick={() => setQuantity(q => Math.max(1, q-1))} className="text-xl font-bold">-</button>
                    <span className="font-bold text-amber-500">{quantity}</span>
                    <button type="button" onClick={() => setQuantity(q => q+1)} className="text-xl font-bold">+</button>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Total Amount</p>
                    <p className="text-3xl lg:text-4xl font-black text-white">₦{total.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-green-400 font-bold uppercase">Saving Today</p>
                    <p className="text-lg font-bold text-green-400">₦{totalSaved.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs leading-relaxed text-slate-400">
                  🎁 <span className="text-white font-bold">BONUS:</span> Your order includes a free <span className="text-amber-500">400W Monocrystalline Panel</span> and a DIY setup kit.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SUCCESS MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
          <div className="bg-white rounded-[2.5rem] max-w-sm w-full p-8 shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 text-2xl">&times;</button>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎖️</div>
              <h3 className="text-2xl font-black text-slate-900">Order Received!</h3>
              <p className="text-slate-500 mt-2 text-sm">Our logistics team will contact you shortly to confirm your delivery address.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {otherProducts.map((p) => (
                <div key={p.id} className="flex flex-col items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl">{p.img}</span>
                  <span className="text-[9px] mt-2 text-center font-bold text-slate-700 uppercase tracking-tighter">{p.name}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setShowModal(false)} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black tracking-widest hover:bg-slate-800 transition shadow-xl">
              BACK TO STORE
            </button>
          </div>
        </div>
      )}
    </section>
  );
}