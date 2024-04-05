function LayoutRoutesComponent({ children }) {
  return (
    <>
      <div className="bg-green-400 flex flex-col justify-between min-h-[100dvh]">
        <header className="bg-red-400 h-[10dvh]">header</header>
        <div className="bg-red-500 flex min-h-[80dvh]">
          <aside className="bg-yellow-300 w-[15dvw]">Sidebar</aside>
          <div className="bg-black text-white w-[85dvw]">{children}</div>
        </div>

        <footer className="bg-fuchsia-600 min-h-[10dvh]">
          <h1>footer</h1>
        </footer>
      </div>
    </>
  );
}

export default LayoutRoutesComponent;
