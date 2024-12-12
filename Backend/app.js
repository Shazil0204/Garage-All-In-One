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
  methods: ['GET','POST','OPTIONS'],
  credentials: true,
}));

app.use(bodyParser.json());

sequelize.sync({ force: false }) // force: false preserves existing tables
  .then(() => console.log('Database synced successfully'))
  .catch((err) => console.error('Error syncing database:', err));

// Auth Endpoints
app.post('/api/auth/register', registerController);
app.post('/api/auth/login', loginController);

// Start server
app.listen(5000, () => console.log(`Server running on port 5000`));
