function Timings({ className ,timing_title,value}) {
  return <div className={className}>
    <p className="text-center text-black px-3">{timing_title}{":"}
    <input className="bg-red-500 h-[5dvh] w-[5dvw]"/>
    </p>
    
  </div>;
}

export default Timings;
