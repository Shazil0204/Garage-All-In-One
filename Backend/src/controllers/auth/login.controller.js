const loginService = require('../../services/auth/login.service');

// Handle user login request
const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body; // Extract request data

    // Call the login service to handle authentication
    const token = await loginService({ username, password });

    // Set the HTTP-only cookie
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: true, // Use HTTPS in production
      sameSite: 'Strict', // CSRF protection
      maxAge: 60 * 60 * 8000, // 8 hours
    });

    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    next(error); // Pass errors to the centralized error handler
  }
};

module.exports = loginController;
