
import Tabs from "@/ui/Tabs";
import CircleNumber from "@/ui/CircleNumber";
import OrdersList from "@/restaurants/restaurant/orders/OrdersList"
function Orders() {
  return (
    <div className="bg-green-400 flex flex-col ">
     
      <ul className="bg-red-400 flex justify-center  min-h-[13dvh] ">
        <li className="bg-yellow-300 relative min-w-[15%] m-3 p-2  rounded-md flex justify-center items-center">
          ALL Orders
          <CircleNumber className="">80</CircleNumber>
          </li>
        <li className="bg-yellow-300 relative min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Dine In Orders<CircleNumber className="">20</CircleNumber></li>
        <li className="bg-yellow-300 relative min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Take Away Orders<CircleNumber className="">50</CircleNumber></li>
        <li className="bg-yellow-300 relative min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Self Delievery Orders<CircleNumber className="">10</CircleNumber></li>
      </ul>
      <div className=" bg-blue-500  relative flex justify-center self-center  w-[80%] my-2">
        <Tabs className="bg-yellow-300"/>
      </div>
      <div>
      <OrdersList/>
      </div>
    </div>
  )
}

export default Orders