

function Orders() {
  return (
    <div className="bg-green-400">
      <ul className="bg-red-400 flex justify-center w-full min-h-[13dvh]">
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">ALL Orders</li>
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Dine In Orders</li>
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Take Away Orders</li>
        <li className="bg-yellow-300 min-w-[15%] m-3 p-2 rounded-md flex justify-center items-center">Self Delievery Orders</li>
      </ul>
    </div>
  )
}

export default Orders