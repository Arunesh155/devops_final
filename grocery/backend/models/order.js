const mongoose = require('mongoose');

// Define the schema for the Order
const orderSchema = new mongoose.Schema({
  items: [{
    name: String,
    price: Number,
    quantity: Number
  }],
  totalPrice: Number,
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  status: { type: String, default: 'Pending' }, // Order status (Pending, Processed, etc.)
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
