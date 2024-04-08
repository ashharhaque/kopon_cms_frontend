"use client";
import { useState } from "react";
import {
  ExpandSideBarIcon,
  HomeIcon,
  CustomerIcon,
  ProductIcon,
  OrderIcon,
  HelpIcon,
  RestaurantIcon,
  EmployeeIcon,
  StaticsIcon
} from "@/icons/icons";
function Sidebar({ className }) {
  const [sideBarCollapse, setSideBarCollapse] = useState(false);
  const sideBarCollapseFunc = () => {
    setSideBarCollapse(!sideBarCollapse);
  };
  return (
    <>
      <aside
        className={`bg-yellow-300 flex items-center relative transition-all ease-in-out  duration-1000 ${
          sideBarCollapse ? "w-[0%]" : "w-[15%]"
        } ${className}`}
      >
        {/* <h1 className={` `}>Sidebar</h1> */}
        <span onClick={sideBarCollapseFunc}>
          <ExpandSideBarIcon
            className={`bg-pink-300 w-[4dvw] h-[4dvh] absolute top-1/2 right-[-40px] transition-all ease-in-out  duration-1000 ${
              sideBarCollapse ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
        <ul
          className={`flex flex-col justify-around bg-blue-400 h-[70%] p-5 transition-all ease-in-out  duration-1000 origin-left ${
            sideBarCollapse ? "scale-x-0" : "scale-x-100"
          }`}
        >
          <li className="flex">
            <HomeIcon className={"w-[15%] mx-2"} />
            <span>Home</span>
          </li>
          <li className="flex">
            <ProductIcon className={"w-[15%] mx-2"} />
            <span>Products</span>
          </li>
          <li className="flex">
            <CustomerIcon className={"w-[15%] mx-2"} />
            <span>Customers</span>
          </li>
          <li className="flex">
            <RestaurantIcon className={"w-[15%] mx-2"} />
            <span>Restaurants</span>
          </li>
          <li className="flex">
            <EmployeeIcon className={"w-[15%] mx-2"} />
            <span>Employee</span>
          </li>
          <li className="flex">
            <OrderIcon className={"w-[15%] mx-2"} />
            <span>Orders</span>
          </li>
          <li className="flex">
            <StaticsIcon className={"w-[15%] mx-2"} />
            <span>Statics</span>
          </li>
          <li className="flex">
            <HelpIcon className={"w-[15%] mx-2"} />
            <span>Help</span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
