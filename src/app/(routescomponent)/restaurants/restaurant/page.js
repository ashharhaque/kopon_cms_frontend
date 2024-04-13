import Link from "next/link";
function SingleRestaurant() {
  const OptionBox = ({ children }) => {
    return (
      <>
        <div className="bg-green-400 text-center flex items-center justify-center w-[40dvw] h-[40dvh] text-black m-5 rounded-3xl">
          {children}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg-red-400 flex justify-center">
        <Link href="/restaurants/restaurant/employee">
          <OptionBox>Employee</OptionBox>
        </Link>
        <Link href="/restaurants/restaurant/productsandcategories">
          <OptionBox>Products & Categories</OptionBox>
        </Link>
      </div>
      <div className="bg-red-400 flex justify-center">
        <Link href="/restaurants/restaurant/orders">
          <OptionBox>Live Orders</OptionBox>
        </Link>
        <Link href="/restaurants/restaurant/statics">
          <OptionBox>Statics</OptionBox>
        </Link>
      </div>
    </>
  );
}

export default SingleRestaurant;
