"use client";
import { useState } from "react";
import Modal from "@/ui/Modal";
import UploadImage from "@/app/_Components/ui/UploadImage";
function EditRestaurant() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
          title="Edit Restaurant"
        >
          <div>
            <UploadImage />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default EditRestaurant;
