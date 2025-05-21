import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const greens = [
  {
    id: 1,
    name: 'Spinach',
    image: 'https://www.islandorganicsbali.com/cdn/shop/products/spinach.jpg?v=1669019690&width=1946',
    description: 'Spinach is high in iron, calcium, and vitamins A, C, and K.',
    tags: [{ label: 'Organic', color: '#d3b19a' }],
    price: '₹219', // Price in INR
  },
  {
    id: 2,
    name: 'Kale',
    image: 'https://www.clinikally.com/cdn/shop/articles/Kale_Extract.png?v=1686660885',
    description: 'Kale is a nutrient-dense leafy green that is high in vitamins A, C, and K.',
    tags: [{ label: 'Fresh', color: '#70b3b1' }, { label: 'Organic', color: '#d05fa2' }],
    price: '₹259', // Price in INR
  },
  {
    id: 3,
    name: 'Lettuce',
    image: 'https://www.urbanfarm.org/wp-content/uploads/2018/06/lettuce-growing.jpg',
    description: 'Lettuce is a low-calorie, nutrient-packed vegetable high in water content.',
    tags: [{ label: 'Fresh', color: '#d3b19a' }],
    price: '₹179', // Price in INR
  },
  {
    id: 4,
    name: 'Arugula',
    image: 'https://www.thespruceeats.com/thmb/2v3ynk1yxIRFF0j_o2frTYuBxsc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/arugula-56a57a365f9b58b7d0fd1c99.jpg',
    description: 'Arugula has a distinct peppery flavor and is rich in antioxidants.',
    tags: [{ label: 'Organic', color: '#d3b19a' }],
    price: '₹229', // Price in INR
  },
  {
    id: 5,
    name: 'Swiss Chard',
    image: 'https://www.bhg.com/thmb/6mACZ06OBkUu35u3mRYzMnxl98M=/500x500/smart/filters:no_upscale()/swiss-chard-leaf-54a20427-3ad1-49b8-b9a7-df04ab49f2ec.jpg',
    description: 'Swiss chard is a vibrant leafy green that is rich in antioxidants, vitamins, and minerals.',
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
    price: '₹249', // Price in INR
  },
  {
    id: 6,
    name: 'Collard Greens',
    image: 'https://www.foodrepublic.com/wp-content/uploads/2015/10/Collard-Greens-GettyImages-521701214.jpg',
    description: 'Collard greens are packed with vitamins A, C, K, and fiber, perfect for a healthy meal.',
    tags: [{ label: 'Organic', color: '#d05fa2' }],
    price: '₹199', // Price in INR
  },
  {
    id: 7,
    name: 'Mustard Greens',
    image: 'https://www.hort.purdue.edu/newcrop/duke_energy/mustard.jpg',
    description: 'Mustard greens have a peppery taste and are full of vitamins A, C, and K.',
    tags: [{ label: 'Fresh', color: '#d3b19a' }],
    price: '₹219', // Price in INR
  },
  {
    id: 8,
    name: 'Bok Choy',
    image: 'https://www.thespruceeats.com/thmb/_f_d0PvkB2CKHJyyEDgUg0kYqUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bok-choy-in-the-kitchen-568935b23df78c3c450eb11a.jpg',
    description: 'Bok choy is a nutritious leafy green that is great for stir-fries and soups.',
    tags: [{ label: 'Organic', color: '#70b3b1' }],
    price: '₹269', // Price in INR
  },
  {
    id: 9,
    name: 'Watercress',
    image: 'https://cdn.britannica.com/78/209678-050-45F3E3EB/watercress-plant.jpg',
    description: 'Watercress is packed with vitamins and is known for its peppery flavor.',
    tags: [{ label: 'Fresh', color: '#d3b19a' }],
    price: '₹189', // Price in INR
  },
  {
    id: 10,
    name: 'Endive',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Endive_-_Cichorium_endivia.jpg',
    description: 'Endive is a crisp, slightly bitter leafy vegetable that pairs well in salads.',
    tags: [{ label: 'Organic', color: '#d05fa2' }],
    price: '₹239', // Price in INR
  },
  {
    id: 11,
    name: 'Romaine Lettuce',
    image: 'https://www.washingtonpost.com/resizer/YtZcpX9lHlbfG-m7yKYrdrp7yq0=/1440x0/smart/filters:no_upscale()/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ELJ43SYFYI6W4T5ON7H3S5T32I.jpg',
    description: 'Romaine lettuce is a crunchy, refreshing green perfect for salads.',
    tags: [{ label: 'Fresh', color: '#70b3b1' }],
    price: '₹209', // Price in INR
  },
  {
    id: 12,
    name: 'Cabbage',
    image: 'https://www.sprouts.com/wp-content/uploads/2017/03/cabbage.jpg',
    description: 'Cabbage is a nutritious vegetable high in vitamin C and fiber.',
    tags: [{ label: 'Organic', color: '#d3b19a' }],
    price: '₹179', // Price in INR
  },
];

const GreenCard = ({ green, onAddToCart }) => {
  const { name, image, description, tags, price } = green;

  return (
    <div className="card">
      <div className="card-inner" style={{ '--clr': '#fff' }}>
        <div className="box">
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <div className="icon">
            <button className="iconBox" onClick={() => onAddToCart(green)}>
              <box-icon name="cart-add" type="solid" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">{price}</p> {/* Display the price */}
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

const GreensLeafs = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if there is any cart data in localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (green) => {
    const updatedCart = [...cart, green];
    setCart(updatedCart);
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <section id="Products">
        <h2>Leafy Greens</h2>
        <div className="container" id="Product">
          {greens.map((green) => (
            <GreenCard key={green.id} green={green} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GreensLeafs;
