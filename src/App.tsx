import { useState } from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Features from "./Features";
import ProductBox from "./ProductBox";
import OrderForm from "./OrderForm";
import Footer from "./Footer";

function App() {
  const [openModal, setOpenModal] = useState<"privacy" | "terms" | null>(null);

  return (
    /* 1. Added 'overflow-x-hidden' to lock the mobile viewport and prevent horizontal scrolling.
      2. Slate & Amber styling kept for that premium, high-tech energy feel.
    */
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      
      <HeroSection />
      <Testimonials />
      <Features />
      <ProductBox />

      {/* Removed the extra div wrapper. 
        Note: Make sure to add id="order-form" to the outermost <section> inside your actual OrderForm.tsx file!
      */}
      <OrderForm />

      <Footer openModal={openModal} setOpenModal={setOpenModal} />
      
    </div>
  );
}

export default App;