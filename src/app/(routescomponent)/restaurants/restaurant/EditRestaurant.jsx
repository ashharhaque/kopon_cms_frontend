"use client";
import { useState } from "react";
import Modal from "@/ui/Modal";
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
        <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} title="Terms of Service" />
      </div>
    </>
  );
}

export default EditRestaurant;
