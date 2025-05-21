import React, { useState, useEffect } from 'react';
import './Products.css'; // Ensure this file contains the relevant styling.
import 'boxicons';

const dairyProducts = [
    {
        id: 1,
        name: 'Butter',
        image: 'https://www.eatingwithfoodallergies.com/wp-content/uploads/2023/03/Is-butter-dairy-free-featured.jpg',
        description: 'High in short-chain fatty acids, calcium, and vitamins D.',
        price: 3.99 * 83, // Converted to INR
        tags: [{ label: 'Organic', color: '#d3b19a' }, { label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 2,
        name: 'Cheese',
        image: 'https://cdn.usdairy.com/optimize/getmedia/0f415696-c423-4e0d-b5d2-cee2e016d020/012414cheese_400.jpg.jpg.aspx?format=webp',
        description: 'Loaded with protein, calcium, vitamin B12, and healthy fats.',
        price: 5.49 * 83, // Converted to INR
        tags: [{ label: 'Organic', color: '#d3b19a' }, { label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 3,
        name: 'Milk',
        image: 'https://static.wixstatic.com/media/9a32a6_5e30325f53c9469a87d5a7503f1d56e3~mv2.jpg/v1/fill/w_1024,h_683,al_c,q_85,usm_0.66_1.00_0.01/9a32a6_5e30325f53c9469a87d5a7503f1d56e3~mv2.webp',
        description: 'A great source of calcium, vitamin D, and protein.',
        price: 2.99 * 83, // Converted to INR
        tags: [{ label: 'Fresh', color: '#d3b19a' }, { label: 'Locally Produced', color: '#70b3b1' }],
    },
    {
        id: 4,
        name: 'Yogurt',
        image: 'https://www.cooksillustrated.com/digital_images/198/large/90.jpg',
        description: 'Rich in probiotics, protein, and calcium.',
        price: 4.29 * 83, // Converted to INR
        tags: [{ label: 'Fresh', color: '#d3b19a' }],
    },
    {
        id: 5,
        name: 'Cream',
        image: 'https://www.sallysbakingaddiction.com/wp-content/uploads/2017/12/whipped-cream.jpg',
        description: 'Made from milk fat, great for cooking, baking, or as a topping.',
        price: 3.49 * 83, // Converted to INR
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 6,
        name: 'Cottage Cheese',
        image: 'https://www.thekitchn.com/wp-content/uploads/2020/08/What-Is-Cottage-Cheese-hero-1200.jpg',
        description: 'A fresh cheese that is high in protein and low in fat.',
        price: 4.19 * 83, // Converted to INR
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 7,
        name: 'Ice Cream',
        image: 'https://www.verywellfit.com/thmb/OAYRUfojw1EX8J0V7WVw-Vtb4sM=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/Ice-Cream-Thumbnail-57ab89d23df78c590f8e93e1.jpg',
        description: 'A sweet frozen dessert made with milk and cream.',
        price: 6.99 * 83, // Converted to INR
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 8,
        name: 'Ghee',
        image: 'https://www.earth.com/wp-content/uploads/2022/10/ghee-1200.jpg',
        description: 'Clarified butter used in Indian cuisine with a rich taste.',
        price: 8.49 * 83, // Converted to INR
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 9,
        name: 'Ricotta Cheese',
        image: 'https://cdn11.bigcommerce.com/s-ryxw9l8/images/stencil/1280x1280/products/3798/17834/whole-milk-ricotta-5-lbs_800x.jpg?c=1570519295',
        description: 'A soft, creamy cheese often used in Italian dishes like lasagna.',
        price: 5.99 * 83, // Converted to INR
        tags: [{ label: 'Organic', color: '#d3b19a' }],
    },
    {
        id: 10,
        name: 'Buttermilk',
        image: 'https://www.loveandlemons.com/wp-content/uploads/2020/08/how-to-make-buttermilk-750x500.jpg',
        description: 'A tangy, fermented dairy drink made from milk.',
        price: 2.79 * 83, // Converted to INR
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 11,
        name: 'Kefir',
        image: 'https://i.pinimg.com/originals/00/1f/8f/001f8f087e7be82fe9f473fbe9f18ba7.jpg',
        description: 'A fermented milk drink, rich in probiotics and gut-friendly.',
        price: 3.69 * 83, // Converted to INR
        tags: [{ label: 'Fresh', color: '#70b3b1' }],
    },
    {
        id: 12,
        name: 'Clotted Cream',
        image: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/05/clotted-cream-1200x1200.jpg',
        description: 'A rich cream with a thick consistency, commonly served with scones.',
        price: 7.99 * 83, // Converted to INR
        tags: [{ label: 'Organic', color: '#d3b19a' }],
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
                <p><strong>Price: ₹{price.toFixed(2)}</strong></p> {/* Display price in INR */}
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

const Dairy = () => {
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
                <h2>Dairy Products</h2>
                <div className="container" id="Product">
                    {dairyProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dairy;
