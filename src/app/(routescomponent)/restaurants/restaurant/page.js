function SingleRestaurant() {
  const OptionBox = ({ children }) => {
    return <div className="bg-green-400 text-center flex items-center justify-center w-[40dvw] h-[40dvh] text-black m-5">{children}</div>;
  };
  return (
    <>
      <div className="bg-red-400 flex justify-center">
        <OptionBox>Employee</OptionBox>
        <OptionBox>Products</OptionBox>
      </div>
      <div className="bg-red-400 flex justify-center">
        <OptionBox>Orders</OptionBox>
        <OptionBox>Statics</OptionBox>
      </div>
    </>
  );
}

export default SingleRestaurant;
