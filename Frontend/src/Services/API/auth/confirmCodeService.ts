import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const verifyResetCode = async (email: string, code: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/verify-code`, {
      email,
      code,
    });
    return response.data; // Success response
  } catch (error) {
    throw new Error("Failed to verify the code.");
  }
};
