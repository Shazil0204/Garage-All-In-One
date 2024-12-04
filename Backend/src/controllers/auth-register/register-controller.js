const bcrypt = require('bcrypt');
const User = require('../../models/User');

// REGISTER USER
const register = async (req, res) => {
  try {
    const { name, username, password, email, is_admin } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: 'Username already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      is_admin,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = register;
