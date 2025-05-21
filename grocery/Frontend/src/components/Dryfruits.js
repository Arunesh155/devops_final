import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

// Sample products for Dry Fruits with prices in INR
const products = [
    {
        id: 1,
        name: 'Almonds',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg',
        description: 'High in magnesium, fiber, and vitamins E.',
        price: '₹913.17',
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 2,
        name: 'Cashews',
        image: 'https://vaaradhifarms.com/cdn/shop/files/amer_med_roasted_cashews_in_a_white_bown_on_top_of_a_wooden_cou_2b1dd2d1-1690-45f2-ad3b-e79afcd643ab.png?v=1714074548&width=2048',
        description: 'Loaded with antioxidants, protein, and zinc.',
        price: '₹747.17',
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 3,
        name: 'Pistachios',
        image: 'https://cdn.shopify.com/s/files/1/1531/6241/products/pistachio_400x.jpg?v=1614266439',
        description: 'Rich in protein, healthy fats, and fiber.',
        price: '₹1,037.67',
        tags: [{ label: 'Fresh', color: '#d3b19a' }],
    },
    {
        id: 4,
        name: 'Walnuts',
        image: 'https://cdn.britannica.com/73/134673-050-317F928E/Walnuts.jpg',
        description: 'Packed with omega-3 fatty acids and antioxidants.',
        price: '₹1,244.17',
        tags: [{ label: 'Organic', color: '#d05fa2' }],
    },
    {
        id: 5,
        name: 'Hazelnuts',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Hazelnuts.jpg',
        description: 'High in fiber and vitamin E, and packed with antioxidants.',
        price: '₹954.67',
        tags: [{ label: 'Organic', color: '#70b3b1' }],
    },
    {
        id: 6,
        name: 'Macadamia Nuts',
        image: 'https://www.mcnutrition.com.au/wp-content/uploads/2021/03/macadamia-nuts.jpg',
        description: 'High in healthy fats and antioxidants, good for heart health.',
        price: '₹1,413.17',
        tags: [{ label: 'Fresh', color: '#d05fa2' }],
    },
    {
        id: 7,
        name: 'Brazil Nuts',
        image: 'https://www.abc.net.au/cm/rimage/11635454-3x2-large.jpg?v=1',
        description: 'Packed with selenium and antioxidants, good for thyroid health.',
        price: '₹829.17',
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 8,
        name: 'Pecans',
        image: 'https://www.verywellfit.com/thmb/eOwJjLwZZGRZZaJtuquLx95_nR4=/2000x1500/filters:fill(auto,1)/Pecans-GettyImages-1055750302-7c0b1e7d8d4a459b9ad2639d47860171.jpg',
        description: 'Rich in healthy fats, fiber, and antioxidants.',
        price: '₹1,163.17',
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 9,
        name: 'Chia Seeds',
        image: 'https://images.unsplash.com/photo-1581104179014-2da7c20d9b74',
        description: 'High in omega-3s, fiber, and protein.',
        price: '₹622.67',
        tags: [{ label: 'Organic', color: '#70b3b1' }],
    },
    {
        id: 10,
        name: 'Sunflower Seeds',
        image: 'https://www.sosimpleeats.com/wp-content/uploads/2021/04/sunflower-seeds.jpg',
        description: 'Packed with healthy fats, vitamins, and minerals.',
        price: '₹497.17',
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 11,
        name: 'Flax Seeds',
        image: 'https://www.verywellfit.com/thmb/7Tt5fOZECfF3e2eBd-wYJTrOwRA=/5000x2813/filters:fill(auto,1)/flax-seeds-56a153073df78cf7726b6a9c.jpg',
        description: 'High in fiber, antioxidants, and omega-3 fatty acids.',
        price: '₹581.17',
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 12,
        name: 'Pumpkin Seeds',
        image: 'https://cdn11.bigcommerce.com/s-1rbf98v/images/stencil/1280x1280/products/804/5518/pumpkin-seeds.jpg?c=2?imbypass=on',
        description: 'Rich in protein, iron, and magnesium.',
        price: '₹664.17',
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    }
];

// ProductCard component to display individual product details
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
                <p className="price">{price}</p> {/* Display price here */}
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

const DryFruits = () => {
    const [cart, setCart] = useState([]);

    // Load cart data from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    // Function to handle adding product to cart
    const handleAddToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <section id="Products">
                <h2>Dry Fruits</h2>
                <div className="container" id="Product">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DryFruits;
