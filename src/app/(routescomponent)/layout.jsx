"use client"
import { useState } from "react";
import { ExpandSideBarIcon } from "@/icons/icons";
function LayoutRoutesComponent({ children }) {
  const [sideBarCollapse,setSideBarCollapse]=useState(false);
  const sideBarCollapseFunc=()=>{
    console.log("inside sideBarToggleFunc--->")
    setSideBarCollapse(!sideBarCollapse);
  }
  return (
    <>
      <div className="bg-green-400 flex flex-col justify-between min-h-[100dvh]">
        <header className="bg-red-400 h-[10dvh]">header</header>
        <div className="bg-red-500 flex min-h-[80dvh]">
          <aside className={`bg-yellow-300 flex  w-[10%] relative transition-all ease-in-out  duration-1000 ${sideBarCollapse?"w-[0%] opacity-0":"w-[10%]"}`}>
            <h1 className={` `}>Sidebar</h1>
            <span onClick={sideBarCollapseFunc}><ExpandSideBarIcon className={`bg-pink-300 w-[4dvw] h-[4dvh] absolute top-1/2 right-0 transition-all ease-in-out  duration-1000 ${sideBarCollapse?"":""}`} /></span>
          </aside>
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