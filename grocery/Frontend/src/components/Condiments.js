import React, { useState, useEffect } from 'react';
import './Products.css';
import 'boxicons';

const condiments = [
  {
    id: 1,
    name: 'Ketchup',
    image: 'https://media.istockphoto.com/id/1403922915/photo/tomato-sauce.jpg?s=612x612&w=0&k=20&c=4XMwd9N01SD60zcuS9mtpmV06oiCnIVirhWILbFfqkY=',
    description: 'Sweet and Salty',
    price: 245.18, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }, { label: 'Locally Produced', color: '#d05fa2' }],
  },
  {
    id: 2,
    name: 'Mayonnaise',
    image: 'https://media.istockphoto.com/id/697026918/photo/opened-mayonnaise-jar-and-spoon.jpg?s=612x612&w=0&k=20&c=pOjnwirLalDJp2QuAdeS-znyVwT7VkbsUSjTu1zroZk=',
    description: 'Creamy',
    price: 287, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
  },
  {
    id: 3,
    name: 'Chilli Sauce',
    image: 'https://media.istockphoto.com/id/1173629118/photo/hot-sauce-on-a-table.jpg?s=612x612&w=0&k=20&c=2wdSMIv8x68zlDO5yuRc-0EDdFYOCYMFaI_qtGieTJ0=',
    description: 'Spicy',
    price: 409.18, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }, { label: 'Spicy', color: '#d05fa2' }],
  },
  {
    id: 4,
    name: 'Apple Cider Vinegar',
    image: 'https://media.istockphoto.com/id/1180535551/photo/apple-vinegar-bottle-of-apple-organic-vinegar-made-from-fermented-apples-on-wooden-background.jpg?s=612x612&w=0&k=20&c=mewZWyBfWhck1T9qPL1Zo5sysmAFpbT6AH5srMS5Vqk=',
    description: 'Organic and Fresh',
    price: 266.50, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
  },
  {
    id: 5,
    name: 'Soy Sauce',
    image: 'https://media.istockphoto.com/id/1259864884/photo/glass-bottle-with-soy-sauce.jpg?s=612x612&w=0&k=20&c=58fUCeZ4PJc6dJEibWBf5cZ8W9u3S2HcVgxYVjbQygU=',
    description: 'Sour',
    price: 205, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }, { label: 'Sour', color: '#d05fa2' }],
  },
  {
    id: 6,
    name: 'Peanut Butter',
    image: 'https://i.pinimg.com/736x/95/8a/29/958a2983e1761003acf6fb8ee58ab336.jpg',
    description: 'Good source of protein and healthy fats',
    price: 410, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
  },
  {
    id: 7,
    name: 'Chocolate Syrup',
    image: 'https://i.pinimg.com/736x/56/dd/fd/56ddfd70ab865f6f07b576f3652cc5fa.jpg',
    description: 'Sweet and smooth',
    price: 533, // Price in INR
    tags: [{ label: 'Cocoa', color: '#d3b19a' }, { label: 'Fresh', color: '#70b3b1' }],
  },
  {
    id: 8,
    name: 'Honey',
    image: 'https://i.pinimg.com/236x/57/5d/50/575d5086f44421fce842a3ba0e35a28d.jpg',
    description: 'Improve memory and reduce the risk of metabolic syndrome',
    price: 574, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
  },
];

const CondimentCard = ({ product, onAddToCart }) => {
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
        <p>Price: ₹{price.toFixed(2)}</p> {/* Display price in INR */}
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

const Condiments = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Condiments</h2>
        <div className="container" id="Product">
          {condiments.map((product) => (
            <CondimentCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Condiments;
