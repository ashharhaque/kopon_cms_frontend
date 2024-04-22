import SummaryStatics from "@/restaurants/restaurant/staticsandreports/statics/SummaryStatics";
function Statics() {
  return ( 
    <div>
      <div className="bg-red-600 flex justify-around">
        <p>TOTAL SALES <span>Rs.50000</span></p>
        <p>TOTAL CUSTOMERS <span>40000</span></p>

        
      </div>
      <div className="bg-pink-300  m-3 p-3">
       <SummaryStatics/>
      </div>
    </div>
  );
}

export default Statics;
