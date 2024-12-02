import React from "react";
import { FaLock } from "react-icons/fa";

interface ResetPasswordFormProps {
  onPasswordChanged: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onPasswordChanged,
}) => {
  return (
    <div className="flex flex-col justify-center">
      {/* New Password Field */}
      <div className="mb-4">
        <label
          htmlFor="newpassword"
          className="block text-gray-600 font-medium mb-2"
        >
          New Password
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <FaLock className="text-gray-500" />
          </div>
          <input
            required
            id="newpassword"
            type="password"
            placeholder="Enter your new Password"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      {/* Confirm Password Field */}
      <div className="mb-1">
        <label
          htmlFor="confirmpassword"
          className="block text-gray-600 font-medium mb-2"
        >
          Confirm Password
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <FaLock className="text-gray-500" />
          </div>
          <input
            required
            id="confirmpassword"
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mb-4">
        <button
          onClick={onPasswordChanged}
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
