import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const products = [
  {
    id: 1,
    name: 'Chicken',
    image: 'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_4318,h_4318,c_limit/RoastChicken_RECIPE_080420_37993.jpg',
    description: 'Chicken is a good source of protein, vitamins, and minerals.',
    price: 200, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
  },
  {
    id: 2,
    name: 'Turkey',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gall-dindi.jpg/800px-Gall-dindi.jpg',
    description: 'Turkey is a good source of protein, vitamins, and minerals.',
    price: 350, // Price in INR
    tags: [
      { label: 'Fresh', color: '#70b3b1' },
      { label: 'Organic', color: '#d05fa2' },
    ],
  },
  {
    id: 3,
    name: 'Duck',
    image: 'https://www.agrifarming.in/wp-content/uploads/Duck-Rearing-in-Polythene-Ponds-4.jpg',
    description: 'Duck is a good source of protein, iron, B vitamins, selenium, and healthy fats.',
    price: 300, // Price in INR
    tags: [{ label: 'Fresh', color: '#d3b19a' }],
  },
  {
    id: 4,
    name: 'Goose',
    image: 'https://www.allaboutbirds.org/guide/assets/photo/162799271-480px.jpg',
    description:
      'It can help with building muscle, maintaining a healthy weight, and supporting brain development.',
    price: 500, // Price in INR
    tags: [{ label: 'Organic', color: '#d3b19a' }],
  },
  {
    id: 5,
    name: 'Quail',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Quail_%28Coturnix%29.jpg/800px-Quail_%28Coturnix%29.jpg',
    description: 'Quail is a good source of lean protein and iron.',
    price: 450, // Price in INR
    tags: [{ label: 'Fresh', color: '#b1d05e' }],
  },
  {
    id: 6,
    name: 'Pigeon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Passenger_Pigeon.jpg/800px-Passenger_Pigeon.jpg',
    description: 'Pigeon meat is lean and high in protein, rich in vitamins and minerals.',
    price: 600, // Price in INR
    tags: [{ label: 'Organic', color: '#f5b861' }],
  },
  {
    id: 7,
    name: 'Rabbit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/White_rabbit.jpg/800px-White_rabbit.jpg',
    description: 'Rabbit meat is high in protein and low in fat.',
    price: 350, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
  },
  {
    id: 8,
    name: 'Lamb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lamb_%28NSW%29.jpg/800px-Lamb_%28NSW%29.jpg',
    description: 'Lamb meat is rich in protein, iron, and B vitamins.',
    price: 700, // Price in INR
    tags: [{ label: 'Organic', color: '#f2a7f7' }],
  },
  {
    id: 9,
    name: 'Beef',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Beef_cuts.jpg/800px-Beef_cuts.jpg',
    description: 'Beef is a good source of high-quality protein and iron.',
    price: 800, // Price in INR
    tags: [{ label: 'Fresh', color: '#d05fa2' }],
  },
  {
    id: 10,
    name: 'Pork',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pork.jpg/800px-Pork.jpg',
    description: 'Pork is rich in protein, thiamine, and vitamin B12.',
    price: 650, // Price in INR
    tags: [{ label: 'Fresh', color: '#ff8000' }],
  },
  {
    id: 11,
    name: 'Venison',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Deer_meat_steaks.jpg/800px-Deer_meat_steaks.jpg',
    description: 'Venison is lean meat high in protein and low in fat.',
    price: 900, // Price in INR
    tags: [{ label: 'Organic', color: '#d3b19a' }],
  },
  {
    id: 12,
    name: 'Bison',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bison_meat.jpg/800px-Bison_meat.jpg',
    description: 'Bison is a healthy, low-fat source of protein and iron.',
    price: 1000, // Price in INR
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
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
        <p><strong>Price: ₹{price}</strong></p> {/* Display price in INR */}
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

const MeatPoultry = () => {
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
        <h2>Meat-Poultry</h2>
        <div className="container" id="Product">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeatPoultry;
