import UploadImage from "@/app/_Components/ui/UploadImage";

import ToggleButton from "@/ui/ToggleButton";

import VerticalRadioWithSubText from "@/app/_Components/ui/VerticalRadioButton";
function EditCategories({ className }) {
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
          <p className="bg-red-500 text-center">TAXES AND CHARGES</p>
        </div>
        <h3 className="flex justify-center items-center">TAXES</h3>
        <div className="bg-blue-400 flex justify-center items-center min-h-[5dvh] m-2 p-5">
          {/* <span>Tax1</span><span>(15% on product price){" : "}</span><span className="bg-red-400 flex items-center h-[1dvh]"><ToggleButton className={"bg-green-500 "}/></span> */}
          {/* <RadioButtonGroup/> */}
          {/* <HorizontalRadioList/> */}
          <VerticalRadioWithSubText
            className={"flex"}
            text={"Tax 1"}
            subText={"(15% on product price)"}
          />
          <VerticalRadioWithSubText
            className={"flex"}
            text={"Tax 2"}
            subText={"(25% on product price)"}
          />
          <VerticalRadioWithSubText
            className={"flex"}
            text={"Tax 3"}
            subText={"(35% on product price)"}
          />
          <VerticalRadioWithSubText
            className={"flex"}
            text={"Tax 4"}
            subText={"(45% on product price)"}
          />
          <VerticalRadioWithSubText
            className={"flex "}
            text={"Tax 5"}
            subText={"(55% on product price)"}
          />
        </div>
        <h3 className="flex justify-center m-2">CHARGES</h3>
        <div className="bg-yellow-400">
          <div className="flex justify-center m-2">
            <span className="inline-flex justify-center my-auto items-center">
              Take-Away Charges
            </span>{" "}
            <ToggleButton className={"w-[10dvw] py-2"} />
            <span className="inline-flex my-auto items-center">
              Dine-In Charges
            </span>{" "}
            <ToggleButton className={"w-[10dvw] py-2"} />
            <span className="inline-flex my-auto items-center">
              Book Table Charges
            </span>{" "}
            <ToggleButton className={"w-[10dvw] py-2"} />
          </div>
        </div>
        <h3 className="flex justify-center m-2">SPICENESS</h3>
        <div className="bg-blue-400 flex justify-center items-center min-h-[5dvh] m-2 p-5">
          {/* <span>Tax1</span><span>(15% on product price){" : "}</span><span className="bg-red-400 flex items-center h-[1dvh]"><ToggleButton className={"bg-green-500 "}/></span> */}
          {/* <RadioButtonGroup/> */}
          {/* <HorizontalRadioList/> */}
          <VerticalRadioWithSubText
            className={"flex"}
            text={"MILD"}
            subText={"(15% LESS CHILLY)"}
          />
          <VerticalRadioWithSubText
            className={"flex"}
            text={"SPICY"}
            subText={"(20% MORE CHILLY)"}
          />
          <VerticalRadioWithSubText
            className={"flex"}
            text={"MEDIUM"}
            subText={"(5% LESS CHILLY)"}
          />
        </div>
        <h3 className="flex justify-center m-2">VEG OR NON VEG</h3>
        <div className="bg-blue-400 flex justify-center items-center min-h-[5dvh] m-2 p-5">
          {/* <span>Tax1</span><span>(15% on product price){" : "}</span><span className="bg-red-400 flex items-center h-[1dvh]"><ToggleButton className={"bg-green-500 "}/></span> */}
          {/* <RadioButtonGroup/> */}
          {/* <HorizontalRadioList/> */}
          <VerticalRadioWithSubText
            className={"flex"}
            text={"VEG"}
            subText={"(CATEGORISED AS VEGETERIAN FOOD)"}
          />
          <VerticalRadioWithSubText
            className={"flex"}
            text={"NON-VEG"}
            subText={"(CATEGORISED AS NON VEGETERIAN FOOD)"}
          />
        </div>
        <h3 className="flex justify-center m-2">ALLERGEN INFORMATION</h3>
        <div className="m-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ALLERGEN INFORMATION
          </label>
          <textarea
            id="ALLERGEN_INFORMATION"
            rows="4"
            class="block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DESCRIBE ALLERGEN INFORMATION RELATED TO PRODUCT"
            onChange={(e) => {
              console.log(
                "allergen information on product---->",
                e.target.value
              );
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default EditCategories;
