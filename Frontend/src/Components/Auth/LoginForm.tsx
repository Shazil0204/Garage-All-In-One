import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { loginUser } from "../../Services/API/auth/loginService";
import { useNavigate } from "react-router-dom";
interface LoginFormProps {
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Directly call the login API service with the username and password
      const res = await loginUser(username, password);

      if (res.status === 200) {
        navigate('/'); 
      } else {
        // Show error message
        window.alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      window.alert("An error occurred while logging in. Please try again.");
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin} // Directly triggers the login service
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
