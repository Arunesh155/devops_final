import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const products = [
  {
    id: 1,
    name: 'Apple',
    image: 'https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.jpg?s=612x612&w=0&k=20&c=_8ShFA2p-xbTBMz0g7JUSsfd329GBkyj47dzW3F1mqc=',
    description: 'Apples are rich in fiber, vitamins, and minerals.',
    price: 120, // Price in INR
    tags: [{ label: 'Organic', color: '#d3b19a' }],
  },
  {
    id: 2,
    name: 'Banana',
    image: 'https://www.theguardian.com/environment/2023/jul/03/how-banana-changed-world-food-history-100-years',
    description: 'Bananas are a great source of potassium and energy.',
    price: 50, // Price in INR
    tags: [
      { label: 'Fresh', color: '#70b3b1' },
      { label: 'Organic', color: '#d05fa2' },
    ],
  },
  {
    id: 3,
    name: 'Orange',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Orange_Fruit_%28Fresh%29.jpg',
    description: 'Oranges are a rich source of vitamin C and antioxidants.',
    price: 80, // Price in INR
    tags: [{ label: 'Fresh', color: '#d3b19a' }],
  },
  {
    id: 4,
    name: 'Mango',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mango.jpg',
    description: 'Mangos are high in vitamin A and great for digestion.',
    price: 150, // Price in INR
    tags: [{ label: 'Organic', color: '#d3b19a' }],
  },
  {
    id: 5,
    name: 'Pineapple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Pineapple.jpg',
    description: 'Pineapples are rich in vitamin C and manganese.',
    price: 90, // Price in INR
    tags: [{ label: 'Fresh', color: '#ffb700' }],
  },
  {
    id: 6,
    name: 'Strawberry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Strawberry.jpg',
    description: 'Strawberries are high in antioxidants and vitamin C.',
    price: 200, // Price in INR
    tags: [{ label: 'Organic', color: '#ff6f61' }],
  },
  {
    id: 7,
    name: 'Watermelon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Watermelon_cuts.jpg',
    description: 'Watermelons are hydrating and rich in vitamins A and C.',
    price: 70, // Price in INR
    tags: [{ label: 'Fresh', color: '#ff4f5c' }],
  },
  {
    id: 8,
    name: 'Grapes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Red_grapes.jpg',
    description: 'Grapes are a great source of vitamins K and C.',
    price: 120, // Price in INR
    tags: [{ label: 'Organic', color: '#6b3fa0' }],
  },
  {
    id: 9,
    name: 'Peach',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Peach.jpg',
    description: 'Peaches are high in vitamins A and C, as well as antioxidants.',
    price: 150, // Price in INR
    tags: [{ label: 'Fresh', color: '#ff9a8b' }],
  },
  {
    id: 10,
    name: 'Plum',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Plum_Fruit.jpg',
    description: 'Plums are rich in fiber, vitamins, and antioxidants.',
    price: 90, // Price in INR
    tags: [{ label: 'Organic', color: '#9b59b6' }],
  },
  {
    id: 11,
    name: 'Kiwi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Kiwifruit.jpg',
    description: 'Kiwis are packed with vitamin C and fiber.',
    price: 180, // Price in INR
    tags: [{ label: 'Fresh', color: '#85cc40' }],
  },
  {
    id: 12,
    name: 'Lemon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Lemon.jpg',
    description: 'Lemons are high in vitamin C and aid in digestion.',
    price: 60, // Price in INR
    tags: [{ label: 'Organic', color: '#ffdf3b' }],
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const { name, image, description, price, tags } = product;

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
        <p>Price: ₹{price}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} style={{ '--clr-tag': tag.color }} className="packaging">
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Fruits = () => {
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
        <h2>Fruits</h2>
        <div className="container" id="Product">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fruits;
