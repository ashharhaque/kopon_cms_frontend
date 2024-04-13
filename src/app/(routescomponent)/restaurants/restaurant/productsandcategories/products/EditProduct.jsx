import UploadImage from "@/app/_Components/ui/UploadImage";
import Dropdown from "@/app/_Components/ui/DropDowns";
import Timings from "@/ui/Timings";
import ToggleButton from "@/ui/ToggleButton";
// import HorizontalRadioList from "@/app/_Components/ui/HorizontalRadioList";
// import VerticalRadioWithSubText from "@/ui/VerticalRadioButton";
import RadioButtonGroup from "@/ui/RadioButton"
import HorizontalRadioList from "@/app/_Components/ui/HorizontalRadioList";
import VerticalRadioWithSubText from "@/app/_Components/ui/VerticalRadioButton";
function EditProduct({ className }) {
  return (
    <div className={`${className}`}>
      <div>
        <UploadImage />
        <div className="bg-yellow-300 flex flex-col justify-center items-center m-5">
          <p className="text-black text-center">Category {" : "}Burger</p>
          <div className="flex m-2">
            <span>Product {" : "}</span>
            <input
              className="bg-green-400 flex justify-center text-center"
              type="text"
              value={"The Cheesy Meesy Burger"}
            />
            <span className="mx-2">Price:Rs</span>
            <input className="w-[10dvw]" type="Number" value={50} />
          </div>
        </div>
        <div>
          <p className="bg-red-500 text-center">
            TAXES AND CHARGES
          </p>
        </div>
        <h3 className="flex justify-center">TAXES</h3>
        <div className="bg-blue-400 flex justify-center items-center min-h-[5dvh] my-2 p-5">
        {/* <span>Tax1</span><span>(15% on product price){" : "}</span><span className="bg-red-400 flex items-center h-[1dvh]"><ToggleButton className={"bg-green-500 "}/></span> */}
       {/* <RadioButtonGroup/> */}
       {/* <HorizontalRadioList/> */}
       <VerticalRadioWithSubText  text={"Tax 1"} subText={"(15% on product price)"}/>
       <VerticalRadioWithSubText text={"Tax 2"} subText={"(25% on product price)"}/>
       <VerticalRadioWithSubText text={"Tax 3"} subText={"(35% on product price)"}/>
       <VerticalRadioWithSubText text={"Tax 4"} subText={"(45% on product price)"}/>
       <VerticalRadioWithSubText text={"Tax 5"} subText={"(55% on product price)"}/>


        </div>
      </div>
    </div>
  );
}

export default EditProduct;
