import Modal from "./Modal";

type ModalState = "privacy" | "terms" | null;

interface FooterProps {
  openModal: ModalState;
  setOpenModal: (state: ModalState) => void;
}

export default function Footer({ openModal, setOpenModal }: FooterProps) {
  return (
    <footer className="py-12 lg:py-20 bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Identity */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-black text-xl tracking-tight mb-4">
              GEMINISOLAR<span className="text-amber-500">TECH</span>
            </h3>
            <p className="max-w-xs mx-auto lg:mx-0 leading-relaxed">
              Leading the transition to independent energy in Nigeria with industrial-grade solar backup systems.
            </p>
          </div>

          {/* Column 2: Trust & Support (Responsive centering) */}
          <div className="text-center">
            <h4 className="text-slate-200 font-bold mb-4 uppercase tracking-widest text-xs">Support & Trust</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center gap-2">
                <span className="text-amber-500">🛡️</span> 24-Month Warranty
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-amber-500">📞</span> Lifetime Technical Support
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-amber-500">🚚</span> Nationwide Crated Shipping
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Actions */}
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end gap-4">
            <h4 className="text-slate-200 font-bold mb-2 uppercase tracking-widest text-xs">Legal</h4>
            <button 
              onClick={() => setOpenModal("privacy")} 
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setOpenModal("terms")} 
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              Terms, Warranty & Delivery
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Gemini Solar Tech. RC: 1234567. All rights reserved.</p>
          <div className="flex gap-4 items-center grayscale opacity-50 hover:opacity-100 transition duration-500">
             <span className="px-2 py-1 border border-slate-700 rounded font-bold uppercase">Pay On Delivery</span>
             <span className="px-2 py-1 border border-slate-700 rounded font-bold uppercase">Solar Certified</span>
          </div>
        </div>

        {/* --- Privacy Policy Modal --- */}
        {openModal === "privacy" && (
          <Modal title="Privacy Policy" onClose={() => setOpenModal(null)}>
            <div className="space-y-4 text-left text-slate-700">
              <p>
                Your data security is as important as your energy security. Information collected (Name, Phone Number, and Delivery Address) is used 
                strictly for fulfilling your Colar 3600 order and registering your warranty.
              </p>
              <p>
                We employ industry-standard encryption and never share your energy usage data or personal details with unauthorized third parties.
              </p>
            </div>
          </Modal>
        )}

        {/* --- Terms of Service Modal --- */}
        {openModal === "terms" && (
          <Modal title="Terms, Warranty & Delivery" onClose={() => setOpenModal(null)}>
            <div className="space-y-4 text-left text-slate-700 max-h-[70vh] overflow-y-auto pr-2">
              <section>
                <h4 className="font-bold text-slate-950">1. Delivery & Setup</h4>
                <p>Due to the weight of the Colar 3600 (3600W system), we use specialized logistics. Lagos: 24–48 hours. Nationwide: 3–7 working days. Pay-On-Delivery is available in select locations.</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-950">2. 2-Year Limited Warranty</h4>
                <p>Every Colar 3600 comes with a 24-month warranty covering the LiFePO4 battery cells and inverter circuit boards. This excludes damage from overload or liquid ingress.</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-950">3. Technical Support</h4>
                <p>Purchasing a Colar 3600 entitles you to lifetime technical support. Our engineers are available for phone consultations regarding solar panel integration and load management.</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-950">4. Return Policy</h4>
                <p>Items can be returned within 7 days if they fail to meet advertised specifications or arrive with factory defects. Unit must be in original crating.</p>
              </section>
            </div>
          </Modal>
        )}
      </div>
    </footer>
  );
}