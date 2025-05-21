// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const orderRoutes = require('./routes/orderRoutes')

const app = express();
const port = 2000;

// Connect to DB
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', authRoutes);
app.use('/admin', adminRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
