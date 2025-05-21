import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const spiceItems = [
  {
    id: 1,
    name: 'Cumin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cumin_seeds.jpg',
    description: 'A warm, earthy spice with a distinctive flavor often used in Indian and Middle Eastern cuisine.',
    tags: [{ label: 'Organic', color: '#f0c141' }],
    price: 50, // Price in INR
  },
  {
    id: 2,
    name: 'Coriander',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Coriander_seeds.jpg',
    description: 'A mild, citrusy spice made from the seeds of the coriander plant.',
    tags: [{ label: 'Fresh', color: '#7ac743' }],
    price: 30, // Price in INR
  },
  {
    id: 3,
    name: 'Turmeric',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Turmeric_roots.jpg',
    description: 'A vibrant yellow spice with a slightly bitter taste, commonly used in curries.',
    tags: [{ label: 'Organic', color: '#ffb34d' }],
    price: 40, // Price in INR
  },
  {
    id: 4,
    name: 'Ginger',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Ginger_root.jpg',
    description: 'A pungent, spicy root that adds heat and flavor to dishes and drinks.',
    tags: [{ label: 'Fresh', color: '#d28b56' }],
    price: 35, // Price in INR
  },
  {
    id: 5,
    name: 'Cardamom',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Cardamom_pods_and_seeds.jpg',
    description: 'A fragrant spice with sweet and spicy notes, often used in Indian desserts and chai.',
    tags: [{ label: 'Organic', color: '#9e8a5f' }],
    price: 90, // Price in INR
  },
  {
    id: 6,
    name: 'Cinnamon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cinnamon_bark.jpg',
    description: 'A sweet and aromatic spice often used in baking, beverages, and savory dishes.',
    tags: [{ label: 'Fresh', color: '#b37052' }],
    price: 70, // Price in INR
  },
  {
    id: 7,
    name: 'Cloves',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Cloves.jpg',
    description: 'A highly aromatic spice with a warm, sweet flavor, commonly used in desserts and stews.',
    tags: [{ label: 'Fresh', color: '#5c4033' }],
    price: 60, // Price in INR
  },
  {
    id: 8,
    name: 'Mustard Seeds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Mustard_seeds.jpg',
    description: 'Tiny seeds with a sharp, tangy flavor, used to season curries, pickles, and sauces.',
    tags: [{ label: 'Organic', color: '#b7bb2e' }],
    price: 25, // Price in INR
  },
  {
    id: 9,
    name: 'Paprika',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Paprika-powder.jpg',
    description: 'A ground spice made from dried peppers, ranging from sweet to smoky to hot.',
    tags: [{ label: 'Fresh', color: '#f67c46' }],
    price: 50, // Price in INR
  },
  {
    id: 10,
    name: 'Chili Powder',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Chili_powder.jpg',
    description: 'A hot, pungent powder made from ground dried chilies, often used in spicy dishes.',
    tags: [{ label: 'Fresh', color: '#e14336' }],
    price: 45, // Price in INR
  },
  {
    id: 11,
    name: 'Fennel Seeds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Fennel-seeds.jpg',
    description: 'A sweet, licorice-flavored seed used in both sweet and savory dishes.',
    tags: [{ label: 'Organic', color: '#6a7a34' }],
    price: 55, // Price in INR
  },
  {
    id: 12,
    name: 'Bay Leaves',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Bay_leaves.jpg',
    description: 'A fragrant, aromatic leaf used to season soups, stews, and sauces.',
    tags: [{ label: 'Fresh', color: '#6d8f3d' }],
    price: 20, // Price in INR
  },
];

const SpiceCard = ({ spiceItem, onAddToCart }) => {
  const { name, image, description, tags, price } = spiceItem;

  return (
    <div className="card">
      <div className="card-inner" style={{ '--clr': '#fff' }}>
        <div className="box">
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <div className="icon">
            <button className="iconBox" onClick={() => onAddToCart(spiceItem)}>
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
        <div className="price">₹{price}</div> {/* Display price in INR */}
      </div>
    </div>
  );
};

const SpiceItemsList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (spiceItem) => {
    const updatedCart = [...cart, spiceItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Spices</h2>
        <div className="container" id="Product">
          {spiceItems.map((spiceItem) => (
            <SpiceCard key={spiceItem.id} spiceItem={spiceItem} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpiceItemsList;
