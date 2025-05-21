import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const frozenFoods = [
  {
    id: 1,
    name: 'Frozen Pizza',
    image: 'https://www.dominos.co.uk/sites/default/files/styles/promo_image/public/promoimages/850x600_frozen-pizza.webp?itok=hgP1llmO',
    description: 'A delicious frozen pizza with cheese and pepperoni.',
    tags: [{ label: 'Frozen', color: '#ff6347' }],
    price: 299, // Price in INR
  },
  {
    id: 2,
    name: 'Frozen Fries',
    image: 'https://cdn.shopify.com/s/files/1/0383/9191/3114/products/friesfrozen_1500x1500.jpg?v=1599608703',
    description: 'Crispy golden fries ready to cook.',
    tags: [
      { label: 'Frozen', color: '#ffd700' },
      { label: 'Vegetarian', color: '#32cd32' },
    ],
    price: 199, // Price in INR
  },
  {
    id: 3,
    name: 'Frozen Vegetables',
    image: 'https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/ssbinary/Frozen-veg.jpg',
    description: 'A mix of frozen vegetables for a healthy meal.',
    tags: [{ label: 'Frozen', color: '#98fb98' }],
    price: 150, // Price in INR
  },
  {
    id: 4,
    name: 'Frozen Fish Fillets',
    image: 'https://www.frozen-fish.com/wp-content/uploads/2021/05/frozen-fish-fillets.jpg',
    description: 'High-quality frozen fish fillets, perfect for grilling.',
    tags: [{ label: 'Frozen', color: '#87cefa' }],
    price: 450, // Price in INR
  },
  {
    id: 5,
    name: 'Frozen Chicken Wings',
    image: 'https://www.southernliving.com/thmb/YoPZqXlRbdWRFXhT1mDjcfnlHlw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/frozen-chicken-wings-58b89f4d3df78c5165f9a86b7fcfa3fd.jpg',
    description: 'Juicy and crispy chicken wings, ready to cook.',
    tags: [{ label: 'Frozen', color: '#ff6347' }],
    price: 349, // Price in INR
  },
  {
    id: 6,
    name: 'Frozen Shrimp',
    image: 'https://www.bumblebee.com/wp-content/uploads/2022/03/frozen-shrimp.jpg',
    description: 'High-quality shrimp, peeled and deveined.',
    tags: [{ label: 'Frozen', color: '#ff4500' }],
    price: 599, // Price in INR
  },
  {
    id: 7,
    name: 'Frozen Dumplings',
    image: 'https://www.buzzfeed.com/buzzfeed-static/static/2021-02/5/11/enhanced/55d3f300f7b0/original-17276-1612540046-9.jpg',
    description: 'Delicious frozen dumplings, ready for steaming or frying.',
    tags: [{ label: 'Frozen', color: '#f0e68c' }],
    price: 220, // Price in INR
  },
  {
    id: 8,
    name: 'Frozen Ice Cream',
    image: 'https://www.cnbc.com/wp-content/uploads/2021/07/104835048-icecream_supermarket_shutterstock.jpg',
    description: 'A variety of frozen ice cream flavors to indulge in.',
    tags: [{ label: 'Frozen', color: '#ffb6c1' }],
    price: 350, // Price in INR
  },
  {
    id: 9,
    name: 'Frozen Bread',
    image: 'https://media.istockphoto.com/photos/frozen-bread-slices-in-plastic-bag-on-white-background-picture-id1203453467',
    description: 'Frozen bread, ready to toast or bake.',
    tags: [{ label: 'Frozen', color: '#deb887' }],
    price: 99, // Price in INR
  },
  {
    id: 10,
    name: 'Frozen French Toast',
    image: 'https://www.frozenbreakfast.com/images/products/french-toast.png',
    description: 'Frozen French toast sticks for a quick breakfast.',
    tags: [{ label: 'Frozen', color: '#ffdab9' }],
    price: 180, // Price in INR
  },
  {
    id: 11,
    name: 'Frozen Meatballs',
    image: 'https://www.foodnetwork.com/content/dam/images/food/fullset/2020/11/23/0/FNK_Shrimp_Meatball_Meal_Tea_Hero.jpg',
    description: 'Delicious and juicy frozen meatballs for pasta or subs.',
    tags: [{ label: 'Frozen', color: '#c71585' }],
    price: 500, // Price in INR
  },
  {
    id: 12,
    name: 'Frozen Breakfast Burritos',
    image: 'https://www.cookinglight.com/thmb/OhzB0g6gGmtoJfVh9lD0hXzS-Ps=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/frozenbreakfastburritos-0e1ca74c5a734edc8cc8c14f9987fc57.jpg',
    description: 'Frozen breakfast burritos for a quick and hearty meal.',
    tags: [{ label: 'Frozen', color: '#ff69b4' }],
    price: 260, // Price in INR
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

const FrozenFoods = () => {
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
        <h2>Frozen Foods</h2>
        <div className="container" id="Product">
          {frozenFoods.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FrozenFoods;
