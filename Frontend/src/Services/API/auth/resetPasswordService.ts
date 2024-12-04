import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const resetPassword = async (email: string, newPassword: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/reset-password`, {
      email,
      newPassword,
    });
    return response.data; // Success response
  } catch (error) {
    throw new Error("Failed to reset the password.");
  }
};
