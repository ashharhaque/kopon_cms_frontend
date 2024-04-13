import ProductList from "@/restaurants/restaurant/productsandcategories/products/productList"
import SearchBar from "@/ui/SearchBar"
function Products({className,children}) {
  return (
    <div className={`${className}`}>
        Products
        <SearchBar className={"m-4"}/>
        <ProductList/>
    </div>
  )
}

export default Products