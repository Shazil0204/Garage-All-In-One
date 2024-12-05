const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const sequelize = require('./src/config/database');
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}))

// Middleware
app.use(bodyParser.json());

sequelize.sync({ force: false }) // force: false preserves existing tables
  .then(() => console.log('Database synced successfully'))
  .catch((err) => console.error('Error syncing database:', err));

// Routes
app.use('/api/auth', authRoutes);

// Test protected route
app.get('/api/protected', (req, res) => {
  res.status(200).json({ message: 'Welcome to the protected route!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
