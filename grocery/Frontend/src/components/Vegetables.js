import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const products = [
    {
        id: 1,
        name: 'Carrot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Carrot_Manoa.jpg',
        description: 'Carrots are rich in beta-carotene, fiber, and various antioxidants.',
        price: 30, // Price in INR
        tags: [{ label: 'Fresh', color: '#ff9b4a' }],
    },
    {
        id: 2,
        name: 'Broccoli',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Broccoli_florets.jpg',
        description: 'Broccoli is high in vitamins, minerals, fiber, and antioxidants.',
        price: 60, // Price in INR
        tags: [
            { label: 'Fresh', color: '#70b3b1' },
            { label: 'Organic', color: '#d05fa2' },
        ],
    },
    {
        id: 3,
        name: 'Spinach',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Spinach_Leipzig.jpg',
        description: 'Spinach is a rich source of iron, vitamins, and antioxidants.',
        price: 40, // Price in INR
        tags: [{ label: 'Fresh', color: '#98e64d' }],
    },
    {
        id: 4,
        name: 'Tomato',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Tomato_je.jpg',
        description: 'Tomatoes are rich in vitamin C, potassium, and lycopene.',
        price: 50, // Price in INR
        tags: [{ label: 'Organic', color: '#ff6347' }],
    },
    {
        id: 5,
        name: 'Lettuce',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Lettuce_leaves.jpg',
        description: 'Lettuce is high in water content, vitamins, and fiber.',
        price: 45, // Price in INR
        tags: [{ label: 'Fresh', color: '#5c8b4f' }],
    },
    {
        id: 6,
        name: 'Cucumber',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Cucumber.JPG',
        description: 'Cucumbers are low in calories and high in antioxidants and water content.',
        price: 35, // Price in INR
        tags: [{ label: 'Organic', color: '#77a64c' }],
    },
    {
        id: 7,
        name: 'Bell Pepper',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Bell_pepper_cross_section.jpg',
        description: 'Bell peppers are rich in vitamins A and C, and they have antioxidant properties.',
        price: 70, // Price in INR
        tags: [{ label: 'Fresh', color: '#c5bfc1' }],
    },
    {
        id: 8,
        name: 'Eggplant',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Eggplant_and_cross_section02.jpg',
        description: 'Eggplants are a rich source of fiber, vitamins, and minerals.',
        price: 55, // Price in INR
        tags: [{ label: 'Organic', color: '#9b7a9d' }],
    },
    {
        id: 9,
        name: 'Cauliflower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Cauliflower.jpg',
        description: 'Cauliflower is a great source of fiber and vitamins.',
        price: 65, // Price in INR
        tags: [{ label: 'Fresh', color: '#f0f4f2' }],
    },
    {
        id: 10,
        name: 'Zucchini',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Zucchini_03.jpg',
        description: 'Zucchini is low in calories, rich in antioxidants, and a good source of vitamin C.',
        price: 40, // Price in INR
        tags: [{ label: 'Fresh', color: '#b4e8b4' }],
    },
    {
        id: 11,
        name: 'Asparagus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Asparagus_stalks.jpg',
        description: 'Asparagus is high in fiber, folate, and vitamins A, C, and K.',
        price: 80, // Price in INR
        tags: [{ label: 'Fresh', color: '#6a9a51' }],
    },
    {
        id: 12,
        name: 'Beetroot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Beetroot.jpg',
        description: 'Beetroots are rich in folate, manganese, and antioxidants.',
        price: 60, // Price in INR
        tags: [{ label: 'Organic', color: '#9c5f49' }],
    },
    {
        id: 13,
        name: 'Sweet Potato',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Sweet_potato_crop.jpg',
        description: 'Sweet potatoes are high in fiber, vitamins, and antioxidants.',
        price: 55, // Price in INR
        tags: [{ label: 'Fresh', color: '#f7b26e' }],
    },
    {
        id: 14,
        name: 'Onion',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Onion_cross_section.jpg',
        description: 'Onions are rich in antioxidants and have many health benefits.',
        price: 25, // Price in INR
        tags: [{ label: 'Fresh', color: '#d8c4b3' }],
    },
    {
        id: 15,
        name: 'Garlic',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Garlic_Heads.jpg',
        description: 'Garlic is known for its medicinal properties and is rich in antioxidants.',
        price: 50, // Price in INR
        tags: [{ label: 'Organic', color: '#9b6e4d' }],
    },
    {
        id: 16,
        name: 'Green Beans',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Green_beans_in_English.jpg',
        description: 'Green beans are high in fiber, vitamin A, and vitamin C.',
        price: 45, // Price in INR
        tags: [{ label: 'Fresh', color: '#60b35f' }],
    },
    {
        id: 17,
        name: 'Artichoke',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Artichoke_%28Cynara_scolymus%29.jpg',
        description: 'Artichokes are rich in fiber, antioxidants, and important minerals.',
        price: 90, // Price in INR
        tags: [{ label: 'Organic', color: '#4e8b6f' }],
    },
    {
        id: 18,
        name: 'Cabbage',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cabbage_-_Whole_and_Cut.jpg',
        description: 'Cabbage is a great source of fiber, vitamins, and minerals.',
        price: 35, // Price in INR
        tags: [{ label: 'Fresh', color: '#8bb9a0' }],
    },
    {
        id: 19,
        name: 'Chili Pepper',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Chili_pepper_1.jpg',
        description: 'Chili peppers are rich in capsaicin and are a great source of vitamins.',
        price: 50, // Price in INR
        tags: [{ label: 'Organic', color: '#b91d3b' }],
    },
    {
        id: 20,
        name: 'Radish',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Radish.jpg',
        description: 'Radishes are low in calories, high in antioxidants, and good for digestion.',
        price: 30, // Price in INR
        tags: [{ label: 'Fresh', color: '#e64858' }],
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
                <p>Price: ₹{price}</p> {/* Displaying price */}
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

const Vegetables = () => {
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
                <h2>Vegetables</h2>
                <div className="container" id="Product">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Vegetables;
