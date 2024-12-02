import Dropdown from "../../Components/Common/Dropdown";
import { useState } from "react";
const Inventory = () => {
  const handleOptionSelect = (value: string) => {
    console.log("Selected option:", value);
    setTitle(value);
  };

  const [title, setTitle] = useState("Choose an option");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="p-12">
      <Dropdown
        options={options}
        onOptionSelect={handleOptionSelect}
        title={title}
        width="12rem"
        height="3rem"
      />
    </div>
  );
};

export default Inventory;
