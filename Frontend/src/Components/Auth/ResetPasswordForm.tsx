import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { resetPassword } from "../../Services/API/auth/resetPasswordService";

interface ResetPasswordFormProps {
  onPasswordChanged: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onPasswordChanged,
}) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    try {
      const response = await resetPassword(
        "user-email@example.com",
        newPassword
      ); // Replace with actual email
      if (response.success) {
        alert("Password changed successfully!");
        onPasswordChanged();
      } else {
        alert("Failed to change the password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while resetting the password.");
    }
  };

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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="mb-4">
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleChangePassword}
        className="py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
      >
        Change Password
      </button>
    </div>
  );
};

export default ResetPasswordForm;
