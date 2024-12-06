const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/database');
const cors = require("cors");
require('dotenv').config();

// Controllers
const registerController = require('./src/controllers/auth/register.controller');
const loginController = require('./src/controllers/auth/login.controller');
const authMiddleware = require('./src/middleware/auth.middleware');


const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}))

app.use(bodyParser.json());

sequelize.sync({ force: false }) // force: false preserves existing tables
  .then(() => console.log('Database synced successfully'))
  .catch((err) => console.error('Error syncing database:', err));

console.log(registerController);
// Auth Endpoints
app.post('/api/auth/register', registerController);
app.post('/api/auth/login', loginController);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
