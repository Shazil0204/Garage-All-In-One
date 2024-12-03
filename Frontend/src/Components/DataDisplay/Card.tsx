import { useEffect, useState } from "react";
import Modal from "../Common/Modal";

interface CardProp {
  image: string;
  title: string;
  description: string;
  quantity: number;
}

const Card: React.FC<CardProp> = ({ image, title, description, quantity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickOutside = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the modal is closed
    }

    // Clean up by resetting the overflow style when the component unmounts or modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={handleOnClickOutside}
        className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2 cursor-pointer"
      >
        <div className="h-48">
          <img
            src={image}
            alt="Card image"
            className="w-full h-full object-contain p-2"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-gray-700 font-medium">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal onClickOutside={handleOnClickOutside}>
          <div className="space-y-4">
            <div className="h-48">
              <img
                src={image}
                alt="Card image"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-gray-700 font-medium">Quantity: {quantity}</p>
            </div>
            <div className="flex justify-between gap-2 z-10">
              <button
                className="bg-red-500 p-1 rounded-lg w-full text-white border-2 border-black"
                type="button"
              >
                Delete
              </button>
              <button
                className="bg-teal-500 p-1 rounded-lg w-full border-2 border-black"
                type="button"
              >
                Edit
              </button>
              <button
                className="bg-teal-500 p-1 rounded-lg w-full border-2 border-black"
                type="button"
              >
                Add to Invoice
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
