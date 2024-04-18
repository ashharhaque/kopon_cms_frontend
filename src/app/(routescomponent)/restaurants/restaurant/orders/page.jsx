
import Tabs from "@/ui/Tabs"
import { OrderCircle } from "@/app/_Components/icons/icons"
function Orders() {
  return (
    <div className="bg-green-400 flex flex-col ">
     
      <ul className="bg-red-400 flex justify-center  min-h-[13dvh] ">
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2  rounded-md flex justify-center items-center">
          ALL Orders
          <OrderCircle/>
          </li>
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Dine In Orders</li>
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Take Away Orders</li>
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Self Delievery Orders</li>
      </ul>
      <div className=" bg-blue-500  flex justify-center self-center  w-[80%]">
        <Tabs className="bg-yellow-300"/>
      </div>
    </div>
  )
}

export default Orders