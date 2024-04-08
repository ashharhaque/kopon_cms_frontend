"use client";
import { useState } from "react";

import Sidebar from "@/ui/Sidebar";
function LayoutRoutesComponent({ children }) {
  
  return (
    <>
      <div className="bg-green-400 flex flex-col justify-between min-h-[100dvh]">
        <header className="bg-red-400 h-[10dvh]">header</header>
        
        <div className="bg-red-500 flex min-h-[80dvh] relative">
          <Sidebar />
          <div className="bg-blue-600 text-white w-[100%] ">{children}</div>
        </div>
        
        <footer className="bg-fuchsia-600 min-h-[10dvh]">
          <h1>footer</h1>
        </footer>
      </div>
    </>
  );
}

export default LayoutRoutesComponent;
