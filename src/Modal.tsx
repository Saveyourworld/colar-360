import React from "react";

// 1. Define the TypeScript rules for the props
interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

// 2. Apply the rules to the component and return the UI
export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    /* Using a slightly heavier backdrop blur for a more premium "app" feel */
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white text-slate-800 rounded-2xl max-w-md w-full p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto">
        
        {/* Title updated to a more authoritative Slate color */}
        <h2 className="text-2xl font-black text-slate-900 mb-4">{title}</h2>
        
        <div className="text-sm leading-relaxed mb-6 text-slate-600 space-y-4">
          {children}
        </div>

        {/* 
           Button changed from Orange to Brand Primary (Slate) 
           to keep the focus on the product rather than the close button.
        */}
        <button 
          onClick={onClose} 
          className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl mt-2 hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}