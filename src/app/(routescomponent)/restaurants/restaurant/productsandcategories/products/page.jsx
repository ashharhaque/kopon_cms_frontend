"use client";
import { useState } from "react";
import ProductList from "@/restaurants/restaurant/productsandcategories/products/productList";
import SearchBar from "@/ui/SearchBar";
import Modal from "@/app/_Components/ui/Modal";
import EditProduct from "@/restaurants/restaurant/productsandcategories/products/EditProduct";
function Products({ className, children }) {
  const [addProduct, setAddProduct] = useState(false);

  return (
    <div className={`${className}`}>
      <div className="flex justify-center items-center">
        <span
          onClick={() => {
            setAddProduct(!addProduct);
          }}
          className={
            "inline-block w-[10dvw] min-h-[5dvh] py-2  rounded-full bg-green-400 text-center"
          }
        >
          Add Product
        </span>
        <SearchBar className={"m-4 bg-yellow-300  w-[40dvw] inline-block"} />
      </div>
      <ProductList />
      {addProduct && (
        <>
          <Modal
            isOpen={addProduct}
            closeModal={() => {
              setAddProduct(!addProduct);
            }}
            
            title={"ADD PRODUCT"}
          >
            <EditProduct className={"text-black"}/>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Products;
