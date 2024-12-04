import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { verifyResetCode } from "../../Services/API/auth/confirmCodeService";

interface ConfirmCodeFormProps {
  handleResetPassword: () => void;
  handleBackToDefault: () => void;
}

const ConfirmCodeForm: React.FC<ConfirmCodeFormProps> = ({
  handleResetPassword,
  handleBackToDefault,
}) => {
  const [code, setCode] = useState<string>("");

  const handleVerifyCode = async () => {
    try {
      const response = await verifyResetCode("user-email@example.com", code); // Replace with actual email
      if (response.success) {
        alert("Code verified successfully!");
        handleResetPassword();
      } else {
        alert("Invalid code. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while verifying the code.");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Code Field */}
      <div className="mb-4">
        <label htmlFor="code" className="block text-gray-600 font-medium mb-2">
          Code has been sent to your email
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <FaLock className="text-gray-500" />
          </div>
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            inputMode="numeric"
            placeholder="Enter your code"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={handleBackToDefault}
          className="font-thin hover:text-red-500 transition duration-200"
        >
          Back
        </button>
      </div>

      {/* Verify Code Button */}
      <button
        onClick={handleVerifyCode}
        className="py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
      >
        Verify Code
      </button>
    </div>
  );
};

export default ConfirmCodeForm;
