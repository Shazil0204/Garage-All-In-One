import DynamicTable from "../../Components/DataDisplay/Table";
import Dropdown from "../../Components/Common/Dropdown";
import Search from "../../Components/Common/Search";

import { useState } from "react";

import { MdModeEditOutline } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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

  const headers = ["ID", "Name", "Date"];
  const data = [
    { ID: 1, Name: "Alice maxwell", Date: "02-12-2024" },
    { ID: 2, Name: "Bob", Date: "02-12-2024" },
    { ID: 2, Name: "Bob", Date: "02-12-2024" },
    { ID: 2, Name: "Bob", Date: "02-12-2024" },
    { ID: 2, Name: "Bob", Date: "02-12-2024" },
    { ID: 2, Name: "Bob", Date: "02-12-2024" },
    { ID: 2, Name: "Bob", Date: "02-12-2024" },
  ];

  const renderActions = (row: Record<string, any>) => (
    <>
      <div className="flex justify-evenly gap-2 w-full overflow-hidden">
        <button
          className="bg-orange-400 hover:bg-orange-500 duration-100 text-white p-2 rounded-full xl:rounded flex justify-evenly items-center gap-2 w-full"
          onClick={() => alert(`Editing ${row.Name}`)}
        >
          <span className="hidden xl:block">Edit</span>
          <MdModeEditOutline className="md:mt-1" />
        </button>
        <button
          className="bg-secondary hover:bg-primary duration-100 text-white p-2 rounded-full xl:rounded flex justify-evenly items-center gap-2 w-full"
          onClick={() => alert(`Viewing ${row.Name}`)}
        >
          <span className="hidden xl:block">Download</span>
          <FaDownload className="md:mt-1" />
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 duration-100 text-white p-2 rounded-full xl:rounded flex justify-evenly items-center gap-2 w-full"
          onClick={() => alert(`Viewing ${row.Name}`)}
        >
          <span className="hidden xl:block">Delete</span>
          <MdDelete className="md:mt-1" />
        </button>
      </div>
    </>
  );

  return (
    <>
      <div className="min-w-full p-2 flex flex-col gap-2">
        <div className="min-w-full flex justify-center gap-2">
          <Search onSearch={handleSearch} />
          <Dropdown
            onOptionSelect={handleOptionSelect}
            options={options}
            title={title}
          />
        </div>
        <DynamicTable
          headers={headers}
          data={data}
          renderActions={renderActions}
        />
      </div>
    </>
  );
};

export default Car;
