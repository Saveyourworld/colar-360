import Modal from "./Modal";

// 1. Define the possible states for the modal
type ModalState = "privacy" | "terms" | null;

// 2. Define the props interface for TypeScript
interface FooterProps {
  openModal: ModalState;
  setOpenModal: (state: ModalState) => void;
}

export default function Footer({ openModal, setOpenModal }: FooterProps) {
  return (
    <footer className="py-10 bg-slate-950 text-slate-400 text-center text-sm border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <p className="font-semibold text-slate-200">© 2026 Colar Energy Systems. All rights reserved.</p>
        <p className="mt-1 text-slate-500">Powering Nigerian homes with reliable, clean solar energy.</p>
        
        <div className="mt-6 flex justify-center gap-8">
          <button 
            onClick={() => setOpenModal("privacy")} 
            className="hover:text-amber-500 underline decoration-slate-700 underline-offset-4 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setOpenModal("terms")} 
            className="hover:text-amber-500 underline decoration-slate-700 underline-offset-4 transition-colors cursor-pointer"
          >
            Terms, Warranty & Delivery
          </button>
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
            <div className="space-y-4 text-left text-slate-700">
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