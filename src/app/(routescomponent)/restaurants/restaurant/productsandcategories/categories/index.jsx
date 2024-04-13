import SearchWithOption from "@/app/_Components/ui/SearchWithOptions";
import CategroyList from "@/restaurants/restaurant/productsandcategories/categories/categoryList.jsx";
function Categories({className,children}) {
  return <div className={`${className}`}>Categories
  <SearchWithOption className={"m-4"}/>
  <CategroyList className=""/>
  </div>;
}

export default Categories;
