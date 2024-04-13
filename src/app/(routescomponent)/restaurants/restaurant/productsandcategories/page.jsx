import Categories from "@/restaurants/restaurant/productsandcategories/categories/index";

function ProductAndCategories({className}) {
  return (
    <div className={`${className}`}>
      <Categories/>
    </div>
  )
}

export default ProductAndCategories;