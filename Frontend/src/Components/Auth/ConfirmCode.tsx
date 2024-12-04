import React from "react";
import { FaLock } from "react-icons/fa";

interface ConfirmCodeFormProps {
  handleResetPassword: () => void;
  handleBackToDefault: () => void;
}

const ConfirmCodeForm: React.FC<ConfirmCodeFormProps> = ({
  handleResetPassword,
  handleBackToDefault,
}) => {
  return (
    <div className="flex flex-col justify-center">
      {/* code Field */}
      <div className="mb-4">
        <label htmlFor="code" className="block text-gray-600 font-medium mb-2">
          Code has been send on the email
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <FaLock className="text-gray-500" />
          </div>
          <input
            id="code"
            type="text"
            inputMode="numeric"
            placeholder="Enter your code"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Forget Password button */}
      <div className="mb-4">
        <button
          onClick={handleBackToDefault}
          className="font-thin hover:text-red-500 transition duration-200"
        >
          Back
        </button>
      </div>
      <button
        onClick={handleResetPassword}
        className="py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
      >
        Verify code
      </button>
    </div>
  );
};

export default ConfirmCodeForm;
