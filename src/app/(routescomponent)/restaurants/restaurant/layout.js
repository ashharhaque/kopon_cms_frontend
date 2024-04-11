import React from "react";
import Image from "next/image";
import ToggleButton from "@/ui/ToggleButton";
import Modal from "@/ui/Modal";
function SingleRestaurantLayout({ children }) {
  return (
    <>
      <div className="bg-pink-400 flex justify-around items-center w-[100%] min-h-[15vh] ">
        <div className="bg-yellow-300 flex justify-center items-center w-[10dvw] h-[15vh] ">
          <Image
            src="/images/restaurantImageBus.jpeg"
            width={90}
            height={90}
            // fill
            className="object-cover "
          />
        </div>
        <p className="flex items-center mx-2 px-2">The Family Masala</p>
        <div className="flex items-center h-[10dvh] ">
          <span className=" mx-3">Is Restaurant Active</span>
          <ToggleButton className="px-2" />
        </div>
        <div>
          <span>Opening Time: 09:30 A.M </span>&nbsp;
          <span className="h-24 border-l border-gray-300"></span>&nbsp;
          <span>{"  "}Closing Time: 10:30 P.M </span>
        </div>
        <div>
          <p className="bg-red-500 ">EDIT</p>
        </div>
      </div>
      <Modal />
      <div>{children}</div>
    </>
  );
}

export default SingleRestaurantLayout;
