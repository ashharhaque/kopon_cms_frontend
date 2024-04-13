import ProductList from "@/restaurants/restaurant/productsandcategories/products/productList"

function Products({className,children}) {
  return (
    <div className={`${className}`}>
        <ProductList/>
    </div>
  )
}

export default Products