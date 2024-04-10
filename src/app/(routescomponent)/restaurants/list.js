import Image from "next/image";
import {ForwardIcon} from "@/icons/icons"
function RestaurantList({ className }) {
  return (
    <>
      <div class={`relative overflow-x-auto shadow-md `}>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Logo
              </th>
              <th scope="col" class="px-6 py-3">
                Restaurant  Name
              </th>
              <th scope="col" class="px-6 py-3">
                Restaurant  Address
              </th>
              <th scope="col" class="px-6 py-3">
                Opening Time
              </th>
              <th scope="col" class="px-6 py-3">
                Closing Time
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="bg-blue-400 w-[20dvh] h-[20dvh]">
                  <Image
                    src="/images/restaurantImageBus.jpeg"
                     width={100}
                     height={100}
                    className="object-cover w-[100%] h-[100%]"
                  />
                </div>
              </th>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 text-wrap whitespace-nowrap dark:text-white"
              >
                Family Masala,chandigarh city center,<br/>
                Zirakpur
              </th>

              <td class="px-6 py-4">09:30 A.M</td>
              <td class="px-6 py-4">10:30 P.M</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <ForwardIcon className=" w-[8dvh]"/>
                  {/* Edit */}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RestaurantList;
