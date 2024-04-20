import OrderDetailsList from "@/restaurants/restaurant/orders/OrderDetailsList";
function OrderDetails({ className }) {
  return (
    <div className={`${className}`}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 overflow-scroll">
          <tr>
            <th scope="col" className="px-6 py-3">Order Id:</th>
            <th scope="col" className="px-6 py-3">Ordered At:</th>
            <th scope="col" className="px-6 py-3">Accepted At:</th>
            <th scope="col" className="px-6 py-3">Order Type:</th>
            <th scope="col" className="px-6 py-3">Order Status:</th>
            <th scope="col" className="px-6 py-3">Total Duration:</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">111</td>
            <td className="px-6 py-4">11:00 A.M</td>
            <td className="px-6 py-4">11:10 A.M</td>
            <td className="px-6 py-4">Dine-In</td>
            <td className="px-6 py-4">In-Process</td>
            <td className="px-6 py-4">00 hrs:12 mins</td>
          </tr>
        </tbody>
      </table>
      <div>
        <OrderDetailsList className={"text-black"} />
      </div>
    </div>
  );
}

export default OrderDetails;
