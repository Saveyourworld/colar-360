import React from "react";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    /* 1. Backdrop: Switched to a darker Slate tint (950) with heavier blur 
       to isolate the modal from the busy product page behind it.
    */
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
      
      {/* 2. Container: Added 'relative' for the X button and a subtle 'scale-in' 
         animation for a more professional feel on high-refresh-rate monitors.
      */}
      <div className="bg-white text-slate-800 rounded-[2rem] max-w-lg w-full p-8 lg:p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200">
        
        {/* Desktop Close Icon (X) - Standard UX for PC users */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors text-3xl font-light h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-50"
        >
          &times;
        </button>

        {/* 3. Typography: Extra bold 'Black' weight to match the Solar brand identity */}
        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 pr-10 tracking-tight">
          {title}
        </h2>
        
        <div className="text-base leading-relaxed mb-8 text-slate-600 space-y-5">
          {children}
        </div>

        {/* 4. Footer Action: Heavy-duty button to match the 'Industrial' theme */}
        <button 
          onClick={onClose} 
          className="w-full bg-slate-900 text-white font-black text-lg py-5 rounded-2xl mt-4 hover:bg-slate-800 transition-all active:scale-[0.98] cursor-pointer shadow-xl shadow-slate-200 border-b-4 border-slate-700"
        >
          RETURN TO SHOP
        </button>
      </div>
    </div>
  );
}