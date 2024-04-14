"use client"
import { useState } from "react";
import SearchWithOption from "@/app/_Components/ui/SearchWithOptions";
import CategroyList from "@/restaurants/restaurant/productsandcategories/categories/categoryList.jsx";
import EditCategories from "@/restaurants/restaurant/productsandcategories/categories/EditCategories";
import Modal from "@/app/_Components/ui/Modal";
function Categories({className,children}) {
  const [addCategories,setAddCategories]=useState(false);
  return <div className={`${className}`}>Categories
  <div className="bg-yellow-200 flex justify-center items-center">
  <button onClick={()=>{setAddCategories(!addCategories)}} className="bg-red-400 w-[10dvw] h-[7dvh] rounded-full">Add Categories</button>
  <SearchWithOption className={"m-4 w-[50dvw]"}/>
  </div>
  
  <CategroyList className=""/>
  {addCategories && <Modal title={"Add Categories"} isOpen={addCategories} closeModal={()=>{
    setAddCategories(false);
  }}>
    <EditCategories/>
  </Modal>}
</div>
}

export default Categories;
