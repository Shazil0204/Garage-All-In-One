import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  title: string;
  options: DropdownOption[];
  onOptionSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  onOptionSelect,
}) => {
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
        className="text-white bg-secondary hover:bg-primary duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2"
        type="button"
      >
        {title}
        <IoIosArrowDropdownCircle
          style={{
            transform: isRotated ? "rotate(540deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            marginTop: 0,
          }}
        />
      </button>

      <div
        className={`z-10 mt-2 bg-secondary rounded-lg shadow w-44 ${
          isOpen ? `visible` : `hidden`
        }`}
      >
        <ul className="p-2 text-sm text-white">
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleOptionClick(option.value)}
                className="block p-2 text-left w-full hover:bg-primary rounded-lg"
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
