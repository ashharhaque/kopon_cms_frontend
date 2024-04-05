import { ExpandSideBarIcon } from "@/icons/icons";
function LayoutRoutesComponent({ children }) {
  return (
    <>
      <div className="bg-green-400 flex flex-col justify-between min-h-[100dvh]">
        <header className="bg-red-400 h-[10dvh]">header</header>
        <div className="bg-red-500 flex min-h-[80dvh]">
          <aside className="bg-yellow-300 flex  w-[15dvw] relative">
        <h1 className="bg-green-400 w-[97%]">Sidebar</h1>
        <ExpandSideBarIcon className={"bg-pink-300 w-[8dvw] h-[8dvh]"}/>
        
          </aside>
          <div className="bg-blue-600 text-white w-[85dvw]">{children}</div>
        </div>

        <footer className="bg-fuchsia-600 min-h-[10dvh]">
          <h1>footer</h1>
        </footer>
      </div>
    </>
  );
}

export default LayoutRoutesComponent;
