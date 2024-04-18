
import Tabs from "@/ui/Tabs"
import CircleNumber from "@/ui/CircleNumber"
function Orders() {
  return (
    <div className="bg-green-400 flex flex-col ">
     
      <ul className="bg-red-400 flex justify-center  min-h-[13dvh] ">
        <li className="bg-yellow-300 relative min-w-[15%] m-3 p-2  rounded-md flex justify-center items-center">
          ALL Orders
          <CircleNumber className={"w-8 h-8"}>0</CircleNumber>
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