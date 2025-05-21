import React, { useState, useEffect } from 'react';
import './Products.css';
import 'boxicons';

const beverageItems = [
  {
    id: 1,
    name: 'Coffee',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Coffee_Beans.jpg',
    description: 'A popular caffeinated beverage made from roasted coffee beans, enjoyed hot or iced.',
    tags: [{ label: 'Fresh', color: '#a35d2d' }],
    price: '₹150',
  },
  {
    id: 2,
    name: 'Tea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Black_tea_leaves.jpg',
    description: 'A hot beverage made from the leaves of the Camellia sinensis plant, available in various types.',
    tags: [{ label: 'Organic', color: '#95b997' }],
    price: '₹50',
  },
  {
    id: 3,
    name: 'Lemonade',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Lemonade.jpg',
    description: 'A refreshing citrus beverage made with lemon juice, water, and sugar, often served cold.',
    tags: [{ label: 'Fresh', color: '#f9e31e' }],
    price: '₹60',
  },
  {
    id: 4,
    name: 'Orange Juice',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Orange_juice_and_oranges.jpg',
    description: 'A nutritious beverage made from fresh oranges, rich in Vitamin C.',
    tags: [{ label: 'Organic', color: '#ff9b2f' }],
    price: '₹120',
  },
  {
    id: 5,
    name: 'Smoothie',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Acai_Bowl_Smoothie.jpg',
    description: 'A blended beverage made with fruits, vegetables, yogurt, or other ingredients, often served cold.',
    tags: [{ label: 'Fresh', color: '#b4c95b' }],
    price: '₹180',
  },
  {
    id: 6,
    name: 'Milkshake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chocolate_Milkshake.jpg',
    description: 'A creamy beverage made from milk, ice cream, and flavorings like chocolate or vanilla.',
    tags: [{ label: 'Fresh', color: '#dcdcdc' }],
    price: '₹130',
  },
  {
    id: 7,
    name: 'Hot Chocolate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Hot_chocolate_with_marshmallows.jpg',
    description: 'A warm beverage made with milk, chocolate, and sugar, often topped with whipped cream or marshmallows.',
    tags: [{ label: 'Fresh', color: '#6f4f4f' }],
    price: '₹150',
  },
  {
    id: 8,
    name: 'Iced Tea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Iced_tea_with_lemon.jpg',
    description: 'A chilled beverage made from brewed tea, often flavored with fruits or herbs.',
    tags: [{ label: 'Organic', color: '#c1d3c4' }],
    price: '₹70',
  },
  {
    id: 9,
    name: 'Coconut Water',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Coconut_water_in_glass.jpg',
    description: 'A hydrating beverage made from the liquid inside coconuts, rich in electrolytes.',
    tags: [{ label: 'Fresh', color: '#74b3b0' }],
    price: '₹40',
  },
  {
    id: 10,
    name: 'Energy Drink',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Energy_drinks.jpg',
    description: 'A beverage designed to boost energy, often containing caffeine, sugar, and other stimulants.',
    tags: [{ label: 'Fresh', color: '#d95e2f' }],
    price: '₹90',
  },
  {
    id: 11,
    name: 'Apple Cider',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Apple_cider.jpg',
    description: 'A beverage made from pressed apples, available in both alcoholic and non-alcoholic versions.',
    tags: [{ label: 'Organic', color: '#ff5f56' }],
    price: '₹110',
  },
  {
    id: 12,
    name: 'Milk',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Glass_of_milk.jpg',
    description: 'A nutritious beverage obtained from cows or other animals, high in calcium and protein.',
    tags: [{ label: 'Fresh', color: '#fff2cc' }],
    price: '₹30',
  },
];


const BeverageCard = ({ beverageItem, onAddToCart }) => {
  const { name, image, description, tags, price } = beverageItem;

  return (
    <div className="card">
      <div className="card-inner" style={{ '--clr': '#fff' }}>
        <div className="box">
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <div className="icon">
            <button className="iconBox" onClick={() => onAddToCart(beverageItem)}>
              <box-icon name="cart-add" type="solid" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">{price}</p> {/* Displaying the price */}
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

const BeverageItemsList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (beverageItem) => {
    const updatedCart = [...cart, beverageItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Beverages</h2>
        <div className="container" id="Product">
          {beverageItems.map((beverageItem) => (
            <BeverageCard key={beverageItem.id} beverageItem={beverageItem} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeverageItemsList;
