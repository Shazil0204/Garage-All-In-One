import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { sendResetCode } from "../../Services/API/auth/forgotPasswordService";

interface ForgotPasswordFormProps {
  handleBackToDefault: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  handleBackToDefault,
}) => {
  const [email, setEmail] = useState<string>("");

  const handleResetPassword = async () => {
    try {
      const response = await sendResetCode(email);
      if (response.success) {
        alert("A reset code has been sent to your email!");
      } else {
        alert("Failed to send reset code. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the reset code.");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Email Field */}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      {/* Submit Button */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={handleResetPassword}
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Send Code
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
