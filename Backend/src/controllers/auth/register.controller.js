const registerService = require('../../services/auth/register.service');

const registerController = async (req, res) => {
  try {
    const userData = req.body;

    // Call the service to register the user
    await registerService(userData);

    // Send a successful response
    res.status(201).json({ message: 'User registered successfully'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = registerController;

