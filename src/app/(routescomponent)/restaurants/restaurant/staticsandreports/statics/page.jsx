function Statics() {
  return ( 
    <div>
      <div className="bg-red-600 flex justify-around">
        <p>TOTAL SALES <span>Rs.50000</span></p>
        <p>TOTAL CUSTOMERS <span>40000</span></p>

        
      </div>
      <div className="bg-pink-300 flex justify-center m-3 p-3">
        <div className="bg-green-400 p-3 m-3">
          YEARLY SALES <span>RS.3000</span>
        </div>
        <div className="bg-yellow-500 p-3 m-3">
          MONTHLY SALES <span>RS.2000</span>
        </div>
        <div className="bg-fuchsia-400 p-3 m-3">
          WEEKLY SALES <span>RS.1000</span>
        </div>
        <div className="bg-blue-800 p-3 m-3">
          DAILY SALES <span>RS.1000</span>
        </div>
      </div>
    </div>
  );
}

export default Statics;
