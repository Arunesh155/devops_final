import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const bakeryItems = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    image: 'https://www.example.com/chocolate-croissant.jpg',
    description: 'Flaky and buttery croissant filled with rich chocolate.',
    tags: [{ label: 'Bakery', color: '#8b4513' }],
    price: 150, // Price in INR
  },
  {
    id: 2,
    name: 'Blueberry Muffin',
    image: 'https://www.example.com/blueberry-muffin.jpg',
    description: 'Soft muffin with fresh blueberries.',
    tags: [
      { label: 'Bakery', color: '#ff6347' },
      { label: 'Vegetarian', color: '#32cd32' },
    ],
    price: 120, // Price in INR
  },
  {
    id: 3,
    name: 'Sourdough Bread',
    image: 'https://www.example.com/sourdough-bread.jpg',
    description: 'Traditional sourdough bread with a tangy flavor.',
    tags: [{ label: 'Bakery', color: '#deb887' }],
    price: 200, // Price in INR
  },
  {
    id: 4,
    name: 'Cinnamon Rolls',
    image: 'https://www.example.com/cinnamon-rolls.jpg',
    description: 'Soft and gooey cinnamon rolls with icing.',
    tags: [{ label: 'Bakery', color: '#ffdab9' }],
    price: 180, // Price in INR
  },
  {
    id: 5,
    name: 'Bagels',
    image: 'https://www.example.com/bagels.jpg',
    description: 'Freshly baked bagels, perfect for breakfast.',
    tags: [{ label: 'Bakery', color: '#d2691e' }],
    price: 100, // Price in INR
  },
  {
    id: 6,
    name: 'Apple Pie',
    image: 'https://www.example.com/apple-pie.jpg',
    description: 'Classic apple pie with a buttery crust.',
    tags: [{ label: 'Bakery', color: '#ff4500' }],
    price: 250, // Price in INR
  },
  {
    id: 7,
    name: 'Lemon Drizzle Cake',
    image: 'https://www.example.com/lemon-drizzle-cake.jpg',
    description: 'Moist lemon cake with a tangy drizzle.',
    tags: [{ label: 'Bakery', color: '#ffeb3b' }],
    price: 220, // Price in INR
  },
  {
    id: 8,
    name: 'Churros',
    image: 'https://www.example.com/churros.jpg',
    description: 'Fried dough with sugar and cinnamon.',
    tags: [{ label: 'Bakery', color: '#ffb6c1' }],
    price: 180, // Price in INR
  },
  {
    id: 9,
    name: 'Vanilla Cupcakes',
    image: 'https://www.example.com/vanilla-cupcakes.jpg',
    description: 'Fluffy vanilla cupcakes with buttercream frosting.',
    tags: [{ label: 'Bakery', color: '#f5deb3' }],
    price: 130, // Price in INR
  },
  {
    id: 10,
    name: 'Fruit Tart',
    image: 'https://www.example.com/fruit-tart.jpg',
    description: 'Crispy tart crust filled with fresh fruits.',
    tags: [{ label: 'Bakery', color: '#ff6347' }],
    price: 300, // Price in INR
  },
];

const formatAsINR = (price) => {
  return `₹${price.toFixed(2)}`; // Format price as INR
};

const ProductCard = ({ product, onAddToCart }) => {
  const { name, image, description, tags, price } = product;

  return (
    <div className="card">
      <div className="card-inner" style={{ '--clr': '#fff' }}>
        <div className="box">
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <div className="icon">
            <button className="iconBox" onClick={() => onAddToCart(product)}>
              <box-icon name="cart-add" type="solid" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} style={{ '--clr-tag': tag.color }} className="packaging">
              {tag.label}
            </li>
          ))}
        </ul>
        <p className="price">{formatAsINR(price)}</p> {/* Display price in INR */}
      </div>
    </div>
  );
};

const BakeryItems = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if there is any cart data in localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Bakery Items</h2>
        <div className="container" id="Product">
          {bakeryItems.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BakeryItems;
