import OrderDetailsList from "@/restaurants/restaurant/orders/OrderDetailsList";
function OrderDetails({ className }) {
  return (
    <div className={`${className}`}>
      <ul className="flex justify-around divide-x-2 border-b-2">
        <li className="divide-y p-2 m-2 ">
          <p className="border-b-2">Order Id:</p>
          <p className="text-center">111</p>
        </li>
        <li className="divide-y p-2 m-2">
          <p className="border-b-2">Ordered At:</p>
          <p className="text-center">11:00 A.M</p>
        </li>
        <li className="divide-y p-2 m-2">
          <p className="border-b-2">Accepted At:</p>
          <p className="text-center">11:10 A.M</p>
        </li>
        <li className="divide-y p-2 m-2">
          <p className="border-b-2">Order Type:</p>
          <p className="text-center">Dine-In</p>
        </li>
        <li className="divide-y p-2 m-2">
          <p className="border-b-2">Order Status:</p>
          <p className="text-center">In-Process</p>
        </li>
        <li className="divide-y p-2 m-2">
          <p className="border-b-2 flex justify-center">Total Duration:</p>
          <p className="text-center">00 hrs:12 mins</p>
        </li>
      </ul>
      <div>
        <OrderDetailsList className={"text-black"}/>
      </div>
    </div>
  );
}

export default OrderDetails;
