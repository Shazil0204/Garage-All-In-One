import Table from "..//../Components/DataDisplay/Table";
import Dropdown from "../../Components/Common/Dropdown";
import Search from "../../Components/Common/Search";

import { useState } from "react";

const Car = () => {
  
  const [title, setTitle] = useState("Choose an option");

  const handleOptionSelect = (value: string) => {
    console.log("Selected option:", value);
    setTitle(value);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query); // Replace this with your logic
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const headers = ["ID", "Car name", "Date of Creation", "BLAH" ];

  const data = [
    { ID: 1, First: "Jorjo", Last: "lmao", Handle: "@mdo" },
    { ID: 2, First: "Jacob", Last: "Thornton", Handle: "@fat" },
    { ID: 3, First: "Larry the Bird", Last: "", Handle: "@twitter" }
  ];

  return (
    <>
      <div className="min-w-full p-2 gap-2">
        <div className="min-w-full flex justify-center gap-2">
        <Search onSearch={handleSearch} />
        <Dropdown
          onOptionSelect={handleOptionSelect}
          options={options}
          title={title}
        />
        </div>
        <Table headers={headers} data={data} />
      </div>
    </>
  )
};

export default Car;
