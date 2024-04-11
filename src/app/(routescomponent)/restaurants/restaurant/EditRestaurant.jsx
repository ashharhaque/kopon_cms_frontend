"use client";
import { useState } from "react";
import Modal from "@/ui/Modal";
import UploadImage from "@/app/_Components/ui/UploadImage";
import Dropdown from "@/app/_Components/ui/DropDowns";
import Timings from "@/ui/Timings";
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
            <div className="flex justify-around ">
            <Dropdown dropDownTitle={"Select Day"} options={["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]}/>
            <Timings className="bg-red-400 flex justify-center" timing_title={"Opening Time"}/>
            <Timings className="bg-red-400" timing_title={"Closing Time"}/>
            </div>
            

          </div>
        </Modal>
      </div>
    </>
  );
}

export default EditRestaurant;
