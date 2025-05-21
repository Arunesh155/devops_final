import React, { useState, useEffect } from 'react';
import './Products.css';
import 'boxicons';

const dryGoodsItems = [
  {
    id: 1,
    name: 'Rice',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Raw_rice_grains.jpg',
    description: 'A staple food consisting of grains, commonly used in cooking and baking.',
    tags: [{ label: 'Organic', color: '#c9c9c9' }],
    price: 60, // Price in INR
  },
  {
    id: 2,
    name: 'Flour',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Wheat_flour.jpg',
    description: 'A powder made from grinding raw grains, often used for baking and cooking.',
    tags: [{ label: 'Gluten-Free', color: '#e2c977' }],
    price: 45, // Price in INR
  },
  {
    id: 3,
    name: 'Sugar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Sugar_Crystals.jpg',
    description: 'A sweet substance, commonly used as a sweetener in various food and beverages.',
    tags: [{ label: 'Raw', color: '#f0f0f0' }],
    price: 50, // Price in INR
  },
  {
    id: 4,
    name: 'Salt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Salt_grains.jpg',
    description: 'A mineral used in cooking to enhance flavor, preserve food, and for other purposes.',
    tags: [{ label: 'Organic', color: '#ffffff' }],
    price: 30, // Price in INR
  },
  {
    id: 5,
    name: 'Pasta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pasta_2011.jpg',
    description: 'A type of Italian food made from durum wheat and water, commonly used in cooking.',
    tags: [{ label: 'Organic', color: '#f9d36f' }],
    price: 80, // Price in INR
  },
  {
    id: 6,
    name: 'Oats',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Oats.jpg',
    description: 'A whole-grain cereal commonly used for making porridge, granola, and other food products.',
    tags: [{ label: 'Gluten-Free', color: '#d2b678' }],
    price: 100, // Price in INR
  },
  {
    id: 7,
    name: 'Lentils',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Lentils.jpg',
    description: 'A type of legume, high in protein, commonly used in soups, salads, and curries.',
    tags: [{ label: 'Organic', color: '#b18b4b' }],
    price: 70, // Price in INR
  },
  {
    id: 8,
    name: 'Chickpeas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Chickpeas.jpg',
    description: 'A type of legume known for its high protein and fiber content, often used in curries and salads.',
    tags: [{ label: 'Organic', color: '#f7e27f' }],
    price: 60, // Price in INR
  },
  {
    id: 9,
    name: 'Quinoa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Quinoa_grains.jpg',
    description: 'A gluten-free grain often used as a substitute for rice or couscous, rich in protein.',
    tags: [{ label: 'Gluten-Free', color: '#d8dce4' }],
    price: 120, // Price in INR
  },
  {
    id: 10,
    name: 'Barley',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Barley_grains.jpg',
    description: 'A cereal grain often used in soups, stews, and as a base for brewing beer.',
    tags: [{ label: 'Organic', color: '#deb17d' }],
    price: 90, // Price in INR
  },
  {
    id: 11,
    name: 'Cornmeal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Cornmeal.jpg',
    description: 'A ground-up product made from corn kernels, used in baking, cooking, and making bread.',
    tags: [{ label: 'Organic', color: '#f9d64f' }],
    price: 55, // Price in INR
  },
  {
    id: 12,
    name: 'Couscous',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Couscous.jpg',
    description: 'A type of semolina pasta, often served as a side dish or base for stews and salads.',
    tags: [{ label: 'Gluten-Free', color: '#e0c6a7' }],
    price: 110, // Price in INR
  },
];

const DryGoodsCard = ({ dryGoodsItem, onAddToCart }) => {
  const { name, image, description, tags, price } = dryGoodsItem;

  return (
    <div className="card">
      <div className="card-inner" style={{ '--clr': '#fff' }}>
        <div className="box">
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <div className="icon">
            <button className="iconBox" onClick={() => onAddToCart(dryGoodsItem)}>
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
        <p className="price">₹{price}</p> {/* Price in INR */}
      </div>
    </div>
  );
};

const DryGoodsItemsList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (dryGoodsItem) => {
    const updatedCart = [...cart, dryGoodsItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Dry Goods</h2>
        <div className="container" id="Product">
          {dryGoodsItems.map((dryGoodsItem) => (
            <DryGoodsCard key={dryGoodsItem.id} dryGoodsItem={dryGoodsItem} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DryGoodsItemsList;
