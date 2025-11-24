"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="w-20 h-20 border-8 border-t-cyan-400 border-r-cyan-400 border-b-white border-l-white rounded-full animate-spin shadow-[0_0_20px_#00ffff,0_0_40px_#00ffff,0_0_60px_#00ffff]"></div>
    </div>
  );
}
