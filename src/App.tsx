import { useState } from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Features from "./Features";
import ProductBox from "./ProductBox";
import OrderForm from "./OrderForm";
import Footer from "./Footer";

function App() {
  // Define the state for the legal modals in the footer
  const [openModal, setOpenModal] = useState<"privacy" | "terms" | null>(null);

  return (
    /* 
      Updated to 'slate' tones for a high-end tech feel. 
      'selection:bg-amber-100' adds a nice solar-branded touch when highlighting text.
    */
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Attention-grabbing entry with the Solar Hero */}
      <HeroSection />

      {/* 2. Social Proof - Crucial for high-ticket items in Nigeria */}
      <Testimonials />

      {/* 3. Deep Dive into the 3600W Specs */}
      <Features />

      {/* 4. What's in the Box? (Panels, Cables, Generator Unit) */}
      <ProductBox />

      {/* 5. The Conversion Point - Clean & Trustworthy */}
      <div id="order-form" className="py-12 bg-white">
         <OrderForm />
      </div>

      {/* 6. Footer with expanded Warranty & Terms */}
      <Footer openModal={openModal} setOpenModal={setOpenModal} />
      
    </div>
  );
}

export default App;