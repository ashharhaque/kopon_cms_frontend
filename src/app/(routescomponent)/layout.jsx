function LayoutRoutesComponent({ children }) {
  return (
    <>
    <div className="bg-green-400 flex flex-col min-h-[100vh]">
    <header className="bg-red-400 ">header</header>
      <aside className="bg-yellow-300">Sidebar</aside>
      <div className="bg-black">{children}</div>
      <footer className="bg-fuchsia-600 min-h[40dvh]">
        <h1>footer</h1>
      </footer>
    </div>
     
    </>
  );
}

export default LayoutRoutesComponent;
