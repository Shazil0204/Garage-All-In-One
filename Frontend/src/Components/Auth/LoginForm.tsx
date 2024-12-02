import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

interface LoginFormProps {
  onForgotPassword: () => void;
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword, onLogin }) => {
  return (
    <div className="flex flex-col justify-center">
      {/* Username Field */}
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-600 font-medium mb-2"
        >
          Username
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <FaUser className="text-gray-500" />
          </div>
          <input
            required
            id="username"
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      {/* Password Field */}
      <div className="mb-1">
        <label
          htmlFor="password"
          className="block text-gray-600 font-medium mb-2"
        >
          Password
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-100">
            <FaLock className="text-gray-500" />
          </div>
          <input
            required
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      {/* Forget Password button */}
      <div className="mb-4">
        <button
          onClick={onForgotPassword}
          className="font-thin hover:text-red-500 transition duration-200"
        >
          Forgot Password!
        </button>
      </div>

      {/* Submit Button */}
      <div className="mb-4">
        <button
          onClick={onLogin}
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
