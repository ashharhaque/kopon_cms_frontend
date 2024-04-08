import SummaryOfRestaurant from "@/app/(routescomponent)/restaurants/Summary";

function Restaurants() {
  return (
    <>
      <div className="bg-yellow-200 flex flex-1">
        <div className="bg-pink-400 min-h-[70dvh] w-[80%]">Restaurant</div>
        <SummaryOfRestaurant className="bg-green-300 w-[20%]"/>
      </div>
    </>
  );
}

export default Restaurants;
