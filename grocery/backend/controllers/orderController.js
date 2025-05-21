const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Order = require('../models/order'); // Assuming you have a model for Order
const router = express.Router();

// Route to place an order
router.post('/place-order', [
  check('customerName').not().isEmpty().withMessage('Name is required'),
  check('customerEmail').isEmail().withMessage('Valid email is required'),
  check('customerAddress').not().isEmpty().withMessage('Address is required'),
], async (req, res) => {
  // Validate the request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure the order data from the request body
  const { items, totalPrice, customerName, customerEmail, customerAddress } = req.body;

  try {
    // Create a new order in the database
    const newOrder = new Order({
      items, // The array of items being ordered
      totalPrice,
      customerName,
      customerEmail,
      customerAddress,
      status: 'Pending', // You can adjust this based on the order status
    });

    // Save the order to the database
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Failed to place the order. Please try again later.' });
  }
});

module.exports = router;
