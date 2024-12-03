import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue); // Call the parent function with the input value
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key
    }
  };

  return (
    <div className="w-9/12 bg-gray-300 rounded-lg flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update state
        onKeyDown={handleKeyDown} // Listen for Enter key
        className="flex-grow p-2 rounded-l-lg border border-gray-400 focus:outline-none"
      />
      <button
        onClick={handleSearch} // Trigger search on button click
        className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-r-lg h-full"
      >
        <IoIosSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
