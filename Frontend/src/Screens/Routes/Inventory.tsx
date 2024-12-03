import Dropdown from "../../Components/Common/Dropdown";
import { useEffect, useState } from "react";
import Search from "../../Components/Common/Search";
import Card from "../../Components/DataDisplay/Card";
import Modal from "../../Components/Common/Modal";
const Inventory = () => {
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

  const cardsInfo = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
    {
      image:
        "https://media.istockphoto.com/id/1306075353/photo/morning-fog-over-a-beautiful-lake-surrounded-by-pine-forest-stock-photo.jpg?s=2048x2048&w=is&k=20&c=l9Pe5gEYNcHNS1VCWpOLNPH0TKOPxw4qKf3yoVZwCXg=",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/023/041/976/small_2x/glass-globe-ball-with-tree-growing-and-green-nature-blur-background-eco-earth-day-concept-generat-ai-free-photo.jpg",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
    {
      image:
        "https://media.istockphoto.com/id/185264129/photo/light-reflecting-on-flowing-water.webp?s=2048x2048&w=is&k=20&c=g7P5T5MPFOeiXAM0KoKZ_RSg2LW4lZgVzqEfgsosk9M=",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
  ];

  return (
    <div className="min-w-full p-2 gap-2">
      <div className="min-w-full flex justify-center gap-2">
        <Search onSearch={handleSearch} />
        <Dropdown
          onOptionSelect={handleOptionSelect}
          options={options}
          title={title}
        />
      </div>
      <div className="min-w-full p-2 grid justify-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardsInfo.map((info) => (
          <Card
            image={info.image}
            title={info.title}
            description={info.description}
            quantity={info.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
