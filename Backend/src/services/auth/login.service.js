const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); // Database model

const loginService = async ({ username, password }) => {
  // Find the user by email
  const user = await User.findOne({ where: { username: `${username}`} });
 
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  const tokenExpiry = 28800000 / 1000;

  // Generate a JWT token with user information of: user id, username, role.
  // The rest is paramaters for JWT generation.
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      is_admin: user.is_admin 
    },
     process.env.JWT_SECRET,
    { 
      expiresIn: tokenExpiry 
    }
  );

  return token;
};

module.exports = loginService;

