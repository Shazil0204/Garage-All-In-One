import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onOptionSelect: (value: string) => void;
  title?: string;
  width?: string;
  height?: string;
  roundness?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onOptionSelect,
  title,
  width,
  height,
  roundness,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleOptionClick = (value: string) => {
    onOptionSelect(value);
    setIsOpen(false);
    setIsRotated(!isRotated);
  };

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <>
      <button
        onClick={handleOpenDropdown}
        className={`flex items-center justify-between gap-2 text-white bg-teal-600 rounded-${
          roundness || "lg"
        } w-${width || "32"} h-${height || "10"} p-2`}
      >
        {title || "Select Option"}
        <IoIosArrowDropdownCircle
          style={{
            transform: isRotated ? "rotate(540deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            marginTop: 0,
          }}
        />
      </button>
      <ul
        className={`absolute left-0 w-full mt-2 bg-secondary text-white rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out`}
        style={{
          minWidth: width || "8rem",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-7px)", // Adds sliding effect
        }}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className="px-4 py-2 hover:bg-teal-800 rounded-lg m-2 cursor-pointer"
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
