import React, { useState } from "react";
import { X } from "lucide-react";

const DemoModal = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-gray-900 text-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-4">Watch the Demo</h2>
        <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
          <video
            src="/demo.MP4"
            controls
            className="w-full h-full rounded-lg border border-purple-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoModal;