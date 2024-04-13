function LinkButton({ className, children }) {
  return (
    <div
      className={`${className}text-white h-[5dvh] bg-blue-400 p-5 flex items-center justify-center rounded-full hover:bg-black`}
    >
      {children}
    </div>
  );
}

export default LinkButton;
