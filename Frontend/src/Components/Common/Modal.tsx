import React from "react";
import { FaTimes } from "react-icons/fa"; // React icon for close button

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          <FaTimes />
        </button>

        {/* Modal Content (Dynamic) */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
  