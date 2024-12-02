import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Dropdown = () => {
  const [title, setTitle] = useState("Category");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const ChangeDropDownValue = () => {
    setDropDownOpen(!dropDownOpen);
    setIsRotated(!isRotated); // Toggle rotation on button click
  };

  return (
    <div className="relative max-w-min bg-primary text-white ~sm/lg~text-xs/md uppercase font-bold rounded-t-lg">
      <button onClick={ChangeDropDownValue} className="flex gap-2 p-2">
        {title}
        <IoIosArrowDropdownCircle
          id="icon"
          className="text-xl mt-1 duration-1000"
          style={{ transform: isRotated ? "rotate(540deg)" : "rotate(0deg)" }} // Apply rotation dynamically
        />
      </button>
      {/* {dropDownOpen && (
        <div className="absolute bg-primary p-2 min-w-full border-t-2 border-black duration-300 hover:bg-secondary rounded-b-lg"></div>
      )} */}
      <div
        className={`absolute bg-primary p-2 min-w-full border-t-2 border-black hover:bg-secondary rounded-b-lg transition-all duration-500 ease-in-out ${
          dropDownOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        {/* Dropdown content */}
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        <p>Option 3</p>
        <p>Option 3</p>
        <p>Option 3</p>
        <p>Option 3</p>
        <p>Option 3</p>
        <p>Option 3</p>
        <p>Option 3</p>
      </div>
    </div>
  );
};

export default Dropdown;
