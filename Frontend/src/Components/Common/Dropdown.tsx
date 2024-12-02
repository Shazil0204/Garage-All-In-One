import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onOptionSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleOptionClick = (value: string) => {
    onOptionSelect(value);
    setIsOpen(false);
    setIsRotated(false); // Reset rotation after selection
  };

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <>
      <button
        onClick={handleOpenDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2"
        type="button"
      >
        Dropdown button{" "}
        <IoIosArrowDropdownCircle
          style={{
            transform: isRotated ? "rotate(540deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            marginTop: 0,
          }}
        />
      </button>

      <div
        id="dropdown"
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
          isOpen ? `visible` : `hidden`
        }`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleOptionClick(option.value)}
                className="block px-4 py-2 text-left w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
