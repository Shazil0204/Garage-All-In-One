import Dropdown from "../../Components/Common/Dropdown";
import { useState } from "react";
import Search from "../../Components/Common/Search";
const Inventory = () => {
  const handleOptionSelect = (value: string) => {
    console.log("Selected option:", value);
    setTitle(value);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query); // Replace this with your logic
  };

  const [title, setTitle] = useState("Choose an option");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="min-w-full flex justify-center p-2 gap-2">
      <Search onSearch={handleSearch} />
      <Dropdown
        onOptionSelect={handleOptionSelect}
        options={options}
        title={title}
      />
    </div>
  );
};

export default Inventory;
