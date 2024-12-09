import { useState } from "react";
import Dropdown from "../../Components/Common/Dropdown";
import Search from "../../Components/Common/Search";
import Card from "../../Components/DataDisplay/Card";
import Modal from "../../Components/Common/Modal";

const Inventory = () => {
  const [title, setTitle] = useState("Choose an option");
  const [showMainModal, setShowMainModal] = useState(false); // For card modal
  const [showEditModal, setShowEditModal] = useState(false); // For edit modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); // For delete modal
  const [showInvoiceModal, setShowInvoiceModal] = useState(false); // For invoice modal
  const [cardID, setCardID] = useState<number | null>(null);

  const handleCardModal = (id: number) => {
    setCardID(id);
    setShowMainModal(true);
  };

  const handleOptionSelect = (value: string) => {
    setTitle(value);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleModalClose = () => {
    setShowMainModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setShowInvoiceModal(false);
  };

  const handleEdit = () => {
    console.log("Edit item", cardID);
    setShowEditModal(true); // Open edit modal
    handleModalClose(); // Close main modal
  };

  const handleDelete = () => {
    console.log("Delete item", cardID);
    setShowDeleteModal(true); // Open delete modal
    handleModalClose(); // Close main modal
  };

  const handleInvoice = () => {
    console.log("Add item to invoice", cardID);
    setShowInvoiceModal(true); // Open invoice modal
    handleModalClose(); // Close main modal
  };

  const cardsInfo = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      title: "Card1",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 2,
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
      title: "Card2",
      description:
        "Some common synonyms of pretend are affect, assume, counterfeit, feign, sham, and simulate. While all these words",
      quantity: 3,
    },
  ];

  return (
    <div className="min-w-full p-2 gap-2">
      <div className="min-w-full flex justify-center gap-2">
        <Search onSearch={handleSearch} />
        <Dropdown
          onOptionSelect={handleOptionSelect}
          options={[]}
          title={title}
        />
      </div>
      <div className="min-w-full p-2 grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardsInfo.map((info) => (
          <div key={info.id} onClick={() => handleCardModal(info.id)}>
            <Card
              image={info.image}
              title={info.title}
              description={info.description}
              quantity={info.quantity}
            />
          </div>
        ))}
      </div>

      {/* Main Modal with Dynamic Content */}
      {showMainModal && cardID !== null && (
        <Modal onClose={handleModalClose}>
          {/* Dynamic content for the selected card */}
          <h2 className="text-2xl font-semibold mb-4">
            {cardsInfo[cardID - 1].title}
          </h2>
          <img
            className="w-full rounded-lg mb-4"
            src={cardsInfo[cardID - 1].image}
            alt={cardsInfo[cardID - 1].title}
          />
          <p className="text-gray-600 mb-6">
            {cardsInfo[cardID - 1].description}
          </p>
          <p className="text-gray-500">
            Quantity: {cardsInfo[cardID - 1].quantity}
          </p>

          <div className="flex justify-between gap-2 mt-6">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white p-2 rounded-lg w-1/3 hover:bg-yellow-400"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 rounded-lg w-1/3 hover:bg-red-400"
            >
              Delete
            </button>
            <button
              onClick={handleInvoice}
              className="bg-blue-500 text-white p-2 rounded-lg w-1/3 hover:bg-blue-400"
            >
              Invoice
            </button>
          </div>
        </Modal>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-xl font-semibold mb-4">Edit Item {cardID}</h2>
          <p>Form for editing item will go here.</p>
          <button
            onClick={handleModalClose}
            className="bg-gray-500 text-white p-2 rounded-lg"
          >
            Close
          </button>
        </Modal>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-xl font-semibold mb-4">Delete Item {cardID}</h2>
          <p>Are you sure you want to delete this item?</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleModalClose}
              className="bg-gray-500 text-white p-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleModalClose}
              className="bg-red-500 text-white p-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </Modal>
      )}

      {/* Invoice Modal */}
      {showInvoiceModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-xl font-semibold mb-4">
            Add Item {cardID} to Invoice
          </h2>
          <p>Do you want to add this item to the invoice?</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleModalClose}
              className="bg-gray-500 text-white p-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleModalClose}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Add to Invoice
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Inventory;
