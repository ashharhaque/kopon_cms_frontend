import { useState } from "react";

function Dropdown({ className, dropDownTitle,options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption,setSelectedOption]=useState(dropDownTitle);
  
  const OPTIONS_LIST = (option, index) => {
    const handleOptionSelect = (target_element) => {
        if (target_element) {
          const value = target_element.textContent;
          setSelectedOption(value)
        }
      };
    return (
      <>
        <li key={index} onClick={(e)=>{
            handleOptionSelect(e.target)
        }}>{option}</li>
      </>
    );
  };
  return (
    <div className={`${className} relative inline-block text-left`}>
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white w-[10dvw] h-[8dvh] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selectedOption}{" "}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute top-[96%]  mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {Array.isArray(options) && options.map((option,index)=>{
                return OPTIONS_LIST(option,index)
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
