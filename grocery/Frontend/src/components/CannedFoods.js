import React, { useState, useEffect } from 'react';
import './Products.css';
import 'boxicons';

// Canned food items with prices in INR
const products = [
    {
        id: 1,
        name: 'Canned Beans',
        description: 'Added to salads, soups, stews, and burritos.',
        image: 'https://www.shutterstock.com/image-photo/can-kidney-beans-on-wooden-260nw-135353648.jpg',
        tags: ['Fresh', 'Organic'],
        price: '₹165',
    },
    {
        id: 2,
        name: 'Canned Tomatoes',
        description: 'Used in sauces, soups, stews, and pasta dishes.',
        image: 'https://media.istockphoto.com/id/1211358446/photo/juicy-canned-tomatoes-on-wooden-rustic-background.jpg?s=612x612&w=0&k=20&c=Xp5BYKitjx9VvgMsZKVqHRZ2eicmGjMoliXHgZbeXSE=',
        tags: ['Fresh', 'Non-GMO'],
        price: '₹207',
    },
    {
        id: 3,
        name: 'Canned Corn',
        description: 'Added to salads, casseroles, soups, and side dishes.',
        image: 'https://media.istockphoto.com/id/1341237922/photo/sweet-corn-in-can-look-delicious-top-view-on-marble-background.jpg?s=612x612&w=0&k=20&c=IqhayoyBGvMiUQSiVca03J2rtOiMnvYC1UgbFawuDSY=',
        tags: ['Fresh', 'Farm-to-Can'],
        price: '₹148',
    },
    {
        id: 4,
        name: 'Canned Tomato Paste',
        description: 'A concentrated form of tomato, used as a base for sauces and soups.',
        image: 'https://media.istockphoto.com/id/179832145/photo/canned-tomato-paste.jpg?s=612x612&w=0&k=20&c=GG7vTYJm4J0uMIlwW9YQh8hQgwp9ruuJx39tjszXwXs=',
        tags: ['Fresh', 'Rich in Antioxidants'],
        price: '₹248',
    },
    {
        id: 5,
        name: 'Canned Coconut Milk',
        description: 'Used in curries, soups, desserts, and smoothies.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJ7AtJO6rFbnUVPHkhTR869eaVkVqtjaCkRVkxQ1VWK6kZ4wzeVhp-rWQLFiRZ4dyksg&usqp=CAU',
        tags: ['Fresh', 'Vegan'],
        price: '₹289',
    },
    {
        id: 6,
        name: 'Canned Salmon',
        description: 'Used in patties, salads, pasta, and dips.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJ7AtJO6rFbnUVPHkhTR869eaVkVqtjaCkRVkxQ1VWK6kZ4wzeVhp-rWQLFiRZ4dyksg&usqp=CAU',
        tags: ['Fresh', 'Wild-Caught'],
        price: '₹414',
    },
    {
        id: 7,
        name: 'Canned Pineapple',
        description: 'Used in desserts, smoothies, marinades, and pizzas.',
        image: 'https://media.istockphoto.com/id/177801824/photo/canned-pineapple-on-wood.jpg?s=612x612&w=0&k=20&c=sKKxQtp8sPLHhznbhx53HmHNUKQAJpI8v2V4g-i6kYo=',
        tags: ['Fresh', 'No Added Sugar'],
        price: '₹182',
    },
    {
        id: 8,
        name: 'Canned Anchovies',
        description: 'Added to Caesar salad dressing for a savory kick.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO4Vr89h5UNkryVQY3r9IfQq2X9eVHLv4wQ&s',
        tags: ['Fresh', 'High in Protein'],
        price: '₹331',
    },
    {
        id: 9,
        name: 'Canned Tuna',
        description: 'Used in sandwiches, salads, casseroles, and pasta dishes.',
        image: 'https://www.recipetineats.com/tachyon/2024/07/Canned-tuna_9-scaled.jpg',
        tags: ['Fresh', 'Sustainably Sourced'],
        price: '₹231',
    },
    {
        id: 10,
        name: 'Canned Chickpeas',
        description: 'Used in hummus, salads, stews, and curries.',
        image: 'https://media.istockphoto.com/id/538904149/photo/opened-can-of-garbanzo-chick-peas.jpg?s=612x612&w=0&k=20&c=7rbpfMSypNqrPnXzY6h0PFpEXHkXiN2zJZfMD_sl_Vo=',
        tags: ['Fresh', 'Gluten-Free'],
        price: '₹132',
    },
    {
        id: 11,
        name: 'Canned Green Peas',
        description: 'Added to soups, fried rice, pasta, and side dishes.',
        image: 'https://media.istockphoto.com/id/1800613817/photo/green-peas-in-a-can.jpg?s=612x612&w=0&k=20&c=OH5Eqa0Xp7xtQZG4g1OdbtF0Fw2t8MwQeM8gm5Q1T2w=',
        tags: ['Fresh', 'No Added Sugar'],
        price: '₹124',
    },
];

const CannedCard = ({ candy, onAddToCart }) => {
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
                <p>{candy.description}</p>
                <p className="price">{candy.price}</p>
                <ul>
                    {candy.tags.map((tag, index) => (
                        <li key={index} className="packaging">{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const CannedFoods = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Load the cart from localStorage on component mount
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleAddToCart = (candy) => {
        const existingItem = cart.find((item) => item.id === candy.id);

        let updatedCart;
        if (existingItem) {
            updatedCart = cart.map((item) =>
                item.id === candy.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...cart, { ...candy, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <section id="Products">
                <h2>Canned-Food</h2>
                <div className="container" id="Product">
                    {products.map((candy) => (
                        <CannedCard key={candy.id} candy={candy} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CannedFoods;
