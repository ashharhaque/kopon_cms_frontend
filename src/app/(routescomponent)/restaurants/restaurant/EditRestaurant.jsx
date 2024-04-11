"use client";
import { useState } from "react";
import Modal from "@/ui/Modal";
import UploadImage from "@/app/_Components/ui/UploadImage";
import Dropdown from "@/app/_Components/ui/DropDowns";
function EditRestaurant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDayDropDownOpen,setIsDayDropDownOpen]=useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const dayDropDownToggle=() =>{
    setIsDayDropDownOpen(!isDayDropDownOpen)
  }
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
            <Dropdown dropDownTitle={"Select Day"} isOpen={isDayDropDownOpen} onClick={dayDropDownToggle}/>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default EditRestaurant;
