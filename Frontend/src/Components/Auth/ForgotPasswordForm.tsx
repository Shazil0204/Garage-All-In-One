import React from "react";
import { CiMail } from "react-icons/ci";

interface ForgotPasswordFormProps {
  handleResetPassword: () => void;
  handleBackToDefault: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  handleResetPassword,
  handleBackToDefault,
}) => {
  return (
    <div className="flex flex-col justify-center">
      {/* email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
          Email
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <CiMail className="text-gray-500" />
          </div>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
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

      {/* Submit Button */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={handleResetPassword}
          className="w-1/2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Send code
        </button>
        <button
          onClick={handleResetPassword}
          className="w-1/2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Insert code
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
