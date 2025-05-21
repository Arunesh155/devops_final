import React, { useState, useEffect } from 'react';
import './Products.css';
import 'boxicons';

const candies = [
  {
    id: 1,
    name: 'Lollipop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_ex9SGIDCMkgClNb6fU3gBXkTYN6wRzROg&s',
    price: '₹150',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Fruity', color: '#70b3b1' },
    ],
  },
  {
    id: 2,
    name: 'Chocolate Bar',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeAmTkBoHpUZRseLOdOIYiNAz0DnpOZEBDOWuW5LLMvjBVPt--qeWe-J_55UFfmnc3Is&usqp=CAU',
    price: '₹200',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Chocolatey', color: '#70b3b1' },
    ],
  },
  {
    id: 3,
    name: 'Gummy Bears',
    image: 'https://cdn.pixabay.com/photo/2024/05/03/13/32/ai-generated-8737094_640.jpg',
    price: '₹270',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Chewy', color: '#70b3b1' },
    ],
  },
  {
    id: 4,
    name: 'Candy Cane',
    image: 'https://media.istockphoto.com/id/1447991411/photo/red-and-white-peppermint-mini-candycanes.jpg?s=612x612&w=0&k=20&c=Tr49KqUl9AoULa5ILjbqT9Kn8KqJcKbXiwAX9hzC090=',
    price: '₹120',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Minty', color: '#d05fa2' },
    ],
  },
  {
    id: 5,
    name: 'Hard Candy',
    image: 'https://st3.depositphotos.com/14670260/18893/i/450/depositphotos_188935200-stock-photo-candies-with-jelly-and-sugar.jpg',
    price: '₹180',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Sweet', color: '#70b3b1' },
    ],
  },
  {
    id: 6,
    name: 'Jelly Beans',
    image: 'https://media.istockphoto.com/id/2154072839/photo/jellybeans.jpg?s=612x612&w=0&k=20&c=cOXbEK_iL0fzTi-DIg2554zvFZ6NVnRxmQa3V-UHBqQ=',
    price: '₹250',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Juicy', color: '#70b3b1' },
    ],
  },
  {
    id: 7,
    name: 'Caramel Chews',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MM1KhW3CfiCuX6lG8eCzhVOawd0Z_JwRmA&',
    price: '₹300',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Buttery', color: '#d05fa2' },
    ],
  },
  {
    id: 8,
    name: 'Toffee',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ16AxMX4OAzxnoQp2LbzE3g8slu9CACU2ag&s',
    price: '₹220',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Caramelized', color: '#d05fa2' },
    ],
  },
  {
    id: 9,
    name: 'Marshmallows',
    image: 'https://media.istockphoto.com/id/1491999502/photo/rainbow-fruity-mini-marshmallows-in-a-pink-bowl-side-view.jpg?s=612x612&w=0&k=20&c=BeJtzuf0sFBZ-JTeUibghNQ1DkZhqN9jY2--YBulm3s=',
    price: '₹140',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Fluffy', color: '#70b3b1' },
    ],
  },
  {
    id: 10,
    name: 'Milk Chocolate Truffles',
    image: 'https://media.istockphoto.com/id/183255573/photo/chocolate-collection-on-a-silk-ackground.jpg?s=612x612&w=0&k=20&c=T31GOgn4FL9Z0pP9MDWcSiexWJ68MjEj2jCDox7jBqw=',
    price: '₹400',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Creamy', color: '#70b3b1' },
    ],
  },
  {
    id: 11,
    name: 'Licorice',
    image: 'https://media.istockphoto.com/id/145159910/photo/candy.jpg?s=612x612&w=0&k=20&c=i7uMNIRMAKmFI1R-WRiIgwApTQwFWc_pixIYYtQPiEs=',
    price: '₹230',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Herbal', color: '#d05fa2' },
    ],
  },
  {
    id: 12,
    name: 'Peanut Brittle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKkvFdiEOCrTzf3FyEy3PhdKpI3aDJQ2BQQ&s',
    price: '₹320',
    tags: [
      { label: 'Fresh', color: '#d3b19a' },
      { label: 'Nutty', color: '#d05fa2' },
    ],
  },
];

const CandyCard = ({ candy, onAddToCart }) => {
  return (
    <div className="card">
      <div className="card-inner" style={{ '--clr': '#fff' }}>
        <div className="box">
          <div className="imgBox">
            <img src={candy.image} alt={candy.name} />
          </div>
          <div className="icon">
            <button className="iconBox" onClick={() => onAddToCart(candy)}>
              <box-icon name="cart-add" type="solid" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>{candy.name}</h3>
        <p>{candy.price}</p>
        <ul>
          {candy.tags.map((tag, index) => (
            <li key={index} style={{ '--clr-tag': tag.color }} className="packaging">
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Candies = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (candy) => {
    const updatedCart = [...cart, candy];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Candies</h2>
        <div className="container" id="Product">
          {candies.map((candy) => (
            <CandyCard key={candy.id} candy={candy} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Candies;
