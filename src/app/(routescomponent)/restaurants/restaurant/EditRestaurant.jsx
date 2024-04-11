"use client";
import { useState } from "react";
import Modal from "@/ui/Modal";
import UploadImage from "@/app/_Components/ui/UploadImage";
import Dropdown from "@/app/_Components/ui/DropDowns";
import Timings from "@/ui/Timings";
import ToggleButton from "@/ui/ToggleButton";

function EditRestaurant() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <p className="bg-red-500 " onClick={openModal}>
          EDIT
        </p>
      </div>
      <div className=" bg-red-300 ">
        <Modal
          isOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          title="Edit Restaurant"
        >
          <div>
            <UploadImage />
            <div className="bg-yellow-300 flex flex-col justify-center items-center m-5">
              <p className="text-black text-center">
                Restaurant Name {" :"}
                <input
                  className="bg-green-400 flex justify-center text-center"
                  type="text"
                  value={"The Family Masala"}
                />
              </p>
            </div>
            <div className="flex justify-around ">
              <Dropdown
                className="flex items-center relative "
                dropDownTitle={"Select Day"}
                options={[
                  "SUNDAY",
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                ]}
              />
              <div className="flex items-center h-[10dvh] ">
                <span className=" mx-1 text-black"> Active</span>
                <ToggleButton className="px-2" />
              </div>
              <Timings
                className="bg-red-400 flex justify-center items-center"
                timing_title={"Opening Time"}
              />
              <Timings
                className="bg-red-400 flex justify-center items-center"
                timing_title={"Closing Time"}
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default EditRestaurant;
