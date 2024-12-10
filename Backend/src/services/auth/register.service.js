const bcrypt = require('bcrypt');
const User = require('../../models/User');

const registerService = async ({ name, username, email, password, is_admin = false }) => {
  // Check if a user with the same email or username exists
  const existingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the new user
  const newUser = await User.create({
    name,
    username,
    email,
    password: hashedPassword,
    is_admin,
  });
};

module.exports = registerService;
