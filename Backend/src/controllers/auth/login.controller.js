const loginService = require('../../services/auth/login.service');

// Handle user login request
const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body; // Extract request data

    // Call the login service to handle authentication
    const token = await loginService({ username, password });

    // Return success response
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    next(error); // Pass errors to the centralized error handler
  }
};

module.exports = loginController;
