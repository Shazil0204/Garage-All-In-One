import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, 
      { username, password },
      { withCredentials: true } // This ensures cookies are sent to backend
    );
    return { status: response.status };// Success response
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};
