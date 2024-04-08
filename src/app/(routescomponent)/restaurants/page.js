import SummaryOfRestaurant from "@/app/(routescomponent)/restaurants/Summary";

function Restaurants() {
  const restaurants=[
    {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  },
  {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  },
  {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  },
  {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  },
  {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  },
  {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  },
  {
    "name":"Kentucky Fried Chicken",
    "opening_time":"09:30",
    "closing_time":"22:30",
    "total_products":{
        "non-veg":{
            "mild":"5",
            "spicy":"20"
        },
        "veg":{
            "mild":"6",
            "spicy":"49"
        }
    },
    "total_employee":"12",
    "total_sales":"11",
    "imgSrc":"/images/restaurantImageBus.jpeg"
  
  }
]
  return (
    <>
      <div className="bg-yellow-200 flex flex-1">
        <div className="bg-pink-400 min-h-[70dvh] w-[100%]">
        {/*restaurant list starts */}
        <div className="bg-violet-400 h-[10dvh]">
            restaurant
        </div>
        {/*restaurant list ends */}

        </div>
        {/* <SummaryOfRestaurant className="bg-green-300 w-[20%]"/> */}
      </div>
    </>
  );
}

export default Restaurants;
