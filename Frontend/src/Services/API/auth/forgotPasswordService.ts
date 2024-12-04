import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const sendResetCode = async (email: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/forgot-password`, {
      email,
    });
    return response.data; // Success response
  } catch (error) {
    throw new Error(
      "Failed to send reset code. Please check the email address."
    );
  }
};
