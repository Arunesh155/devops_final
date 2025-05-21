// controllers/adminController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

// Admin login
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    let admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { admin: { id: admin._id, role: "admin" } };
    const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = { loginAdmin };
