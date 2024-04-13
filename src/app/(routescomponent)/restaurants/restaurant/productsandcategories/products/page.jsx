import ProductList from "@/restaurants/restaurant/productsandcategories/products/productList";
import SearchBar from "@/ui/SearchBar";
import LinkButton from "@/app/_Components/ui/LinkButton";
function Products({ className, children }) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-center items-center">
        <span className={"inline-block w-[10dvw] min-h-[5dvh] py-2  rounded-full bg-green-400 text-center"}>Add Product</span>
        <SearchBar className={"m-4 bg-yellow-300  w-[40dvw] inline-block"} />
      </div>
      

      <ProductList />
    </div>
  );
}

export default Products;
