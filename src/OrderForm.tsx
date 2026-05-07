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

    const message = `
🚀 NEW ORDER: COLAR 3600 SOLAR GENERATOR

👤 Name: ${fullName}
📞 Phone: ${phone}
📍 Address: ${address}
🗺️ State: ${state}
📦 Quantity: ${quantity}
💰 Total Amount: ₦${total.toLocaleString()}

Customer is waiting for confirmation call.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    try {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(
        () => console.log("Email logged successfully"),
        (err) => console.warn("Proceeding via WhatsApp.", err)
      );

      setShowModal(true);
      window.open(whatsappURL, "_blank");

    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order-form" className="py-16 px-4 bg-slate-50 shadow-inner relative">
      <div className="max-w-md mx-auto">
        <div className="bg-amber-100 text-amber-800 p-3 rounded-lg text-center font-bold mb-6 border border-amber-200">
          🔥 Promo Price ends in 24 Hours! Only 5 Units Left.
        </div>

        <h2 className="text-3xl font-black text-center mb-2 text-slate-900">Claim Your Energy Freedom</h2>
        <p className="text-center text-slate-500 mb-8">Pay on Delivery available nationwide.</p>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
        >
          <input type="text" name="customer_name" placeholder="Full Name" className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition" required />
          <input type="tel" name="customer_phone" placeholder="WhatsApp Phone Number" className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition" required />
          <input type="text" name="customer_address" placeholder="Full Delivery Address" className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition" required />
          <input type="text" name="customer_note" placeholder="State/City" className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition" required />

          <label className="block text-sm font-bold text-slate-700 mb-2">Quantity of Units</label>
          <input type="number" name="quantity" value={quantity} min="1" className="w-full p-4 border mb-4 rounded-xl text-slate-900 font-bold" onChange={(e) => setQuantity(Number(e.target.value))} />

          {/* Hidden inputs for EmailJS tracking */}
          <input type="hidden" name="order_items" value={`${quantity}x COLAR 3600 Solar Generator`} />
          <input type="hidden" name="order_total" value={total.toLocaleString()} />

          <div className="bg-slate-900 p-5 rounded-xl mb-6 text-white">
            <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Price:</span>
                <span className="text-2xl font-black">₦{total.toLocaleString()}</span>
            </div>
            <div className="text-xs text-green-400 mt-1 font-bold">✓ You are saving ₦{totalSaved.toLocaleString()} today!</div>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className={`w-full text-white font-black text-xl py-5 rounded-xl transition-all shadow-lg ${
              loading ? "bg-slate-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 hover:-translate-y-1"
            }`}
          >
            {loading ? "Confirming..." : "SUBMIT ORDER NOW - PAY ON DELIVERY"}
          </button>
          
          <p className="text-[10px] text-center text-slate-400 mt-4 uppercase font-bold tracking-widest">
             🔒 Encrypted Secure Checkout
          </p>
        </form>
      </div>

      {/* --- SUCCESS MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-sm w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-300">
            
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-black text-2xl">&times;</button>

            <div className="text-center">
              <div className="text-6xl mb-4">🎖️</div>
              <h3 className="text-2xl font-black text-slate-900">Success!</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                We've received your order for the <span className="font-bold">Colar 3600</span>. One of our agents will call you shortly to confirm delivery.
              </p>
            </div>

            <hr className="my-6 border-slate-100" />

            <p className="text-[10px] font-bold uppercase text-slate-400 mb-4 tracking-widest text-center">View Other Amazing Products</p>

            <div className="grid grid-cols-3 gap-3">
              {otherProducts.map((p) => (
                <div key={p.id} className="flex flex-col items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl">{p.img}</span>
                  <span className="text-[9px] mt-2 text-center font-bold text-slate-700 leading-tight">{p.name}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setShowModal(false)} className="w-full mt-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">
              Back to Home
            </button>
          </div>
        </div>
      )}
    </section>
  );
}