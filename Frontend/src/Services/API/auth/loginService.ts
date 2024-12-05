import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });
    return response.data; // Success response
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};
