"use client"
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import {ForwardIcon} from "@/icons/icons"
import LinkButton from "@/app/_Components/ui/LinkButton";
import Modal from "@/app/_Components/ui/Modal";
import EditCategories from "@/restaurants/restaurant/productsandcategories/categories/EditCategories";

const OrdersList = ({ className }) => {
  const [editCategories,setEditCategories]=useState(false);
  return (
    <>
      <div className={`${className}relative overflow-x-auto shadow-md `}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Logo
              </th>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Products
              </th>
              <th scope="col" className="px-6 py-3">
                Active Products
              </th>
              <th scope="col" className="px-6 py-3">
                InActive Products
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="bg-blue-400 w-[20dvh] h-[20dvh]">
                  <Image
                    src="/images/restaurantImageBus.jpeg"
                    width={100}
                    height={100}
                    className="object-cover w-[100%] h-[100%]"
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Burgers 
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 text-wrap whitespace-nowrap dark:text-white">
               100
              </td>

              <td className="px-6 py-4">89</td>
              <td className="px-6 py-4">11</td>
              <td className="px-6 py-4">
               
                <Link
                  href="/restaurants/restaurant/productsandcategories/products"
                  className="font-medium m-2 text-blue-600 dark:text-blue-500 hover:underline text-center"
                >
                  {/* <ForwardIcon className=" w-[8dvh]"/> */}
                  <LinkButton className="">See Products</LinkButton>
                  {/* Edit */}
                </Link>
                <LinkButton className={""} ><span onClick={()=>setEditCategories(!editCategories)}>Edit Categories</span></LinkButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      {editCategories && <Modal title={"Edit Categories"} isOpen={editCategories} closeModal={()=>{
    setEditCategories(false);
  }}>
    <EditCategories/>
  </Modal>}
      </div>
    </>
  );
};

export default OrdersList;