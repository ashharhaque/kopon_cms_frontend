import Image from "next/image";
import Link from 'next/link';
import {ForwardIcon} from "@/icons/icons";
import LinkButton from "@/app/_Components/ui/LinkButton";
import ToggleButton from "@/app/_Components/ui/ToggleButton";
function ProductList({className,children,editProduct,setEditProduct}) {
  return (
    <div className={`${className}relative overflow-x-auto shadow-md `}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Is Product Active
              </th>
              <th scope="col" className="px-6 py-3 text-center">
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
               Cheese Burger
              </td>

              <td className="px-6 py-4 text-center">
              <ToggleButton/>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={()=>{
                    setEditProduct(!editProduct)
                  }}
                  className="font-medium text-white  dark:text-blue-500 hover:underline text-center"
                >
                  {/* <ForwardIcon className=" w-[8dvh]"/> */}
                  <LinkButton >Edit Product</LinkButton>
                  {/* Edit */}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default ProductList