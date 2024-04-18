"use client";
import { useState } from "react";
import Link from "next/link";
import LinkButton from "@/app/_Components/ui/LinkButton";
import Modal from "@/app/_Components/ui/Modal";
import OrderDetails from "@/restaurants/restaurant/orders/OrderDetails";
const OrdersList = ({ className }) => {
const [seeOrderDetails,setSeeOrderDetails]=useState(false);
  return (
    <>
      <div className={`${className}relative overflow-x-auto shadow-md `}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3">
                Ordered At
              </th>
              <th scope="col" className="px-6 py-3">
                Order Type
              </th>
              <th scope="col" className="px-6 py-3">
                Order Status
              </th>
              <th scope="col" className="px-6 py-3">
                Otp
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               <span>111</span>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <span>11:00 a.m</span>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                <span className="border-2 border-blue-400 p-3">Dine-In</span>
              </td>

              <td className="px-6 py-4 font-medium text-gray-900 text-wrap whitespace-nowrap dark:text-white"><span className=" border-green-300  border-2 p-3">In-Process</span></td>
              <td className="px-6 py-4 font-medium text-gray-900 text-wrap whitespace-nowrap dark:text-white">1234</td>
              <td className="px-6 py-4">
               
                  {/* <ForwardIcon className=" w-[8dvh]"/> */}
                  <LinkButton className=""><span onClick={()=>{
                    console.log("on order details click-->")
                    setSeeOrderDetails(true);
                  }}>See Order</span></LinkButton>
              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     <div>
        <Modal isOpen={seeOrderDetails} title={"Order Details"}>
            <OrderDetails/>
        </Modal>
     </div>
    </>
  );
};

export default OrdersList;
