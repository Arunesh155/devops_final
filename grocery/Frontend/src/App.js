import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Dryfruits from './components/Dryfruits';
import LeafyGreens from './components/LeafyGreens';
import Dairyproducts from './components/Dairyproducts';
import Frozenfoods from './components/Frozenfoods';
import Fruits from './components/Fruits';
import Oils from './components/Oils';
import Snacks from './components/Snacks';
import Vegetables from './components/Vegetables';
import Condiments from './components/Condiments';
import Candies from './components/Candies';
import CannedFoods from './components/CannedFoods';
import MeatPoultry from './components/MeatPoultry';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Seafood from './components/SeaFood';
import Bakery from './components/Bakery'
import SpiceItemsList from './components/Spices';
import GrainItemsList from './components/Grains';
import BeverageItemsList from './components/Bevarages';
import DryGoodsItemsList from './components/DryGoods';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dry" element={<Dryfruits />} />
        <Route path="/leaf" element={<LeafyGreens />}/>
        <Route path="/dairy" element={<Dairyproducts />}/>
        <Route path="/frozen" element={<Frozenfoods />}/>
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/oils" element={<Oils />}/>
        <Route path="/snacks" element={<Snacks />}/>
        <Route path="/vegetables" element={<Vegetables />}/>
        <Route path="/condiments" element={<Condiments />} />
        <Route path="/candies" element={<Candies />}/>
        <Route path="/cannedfoods" element={<CannedFoods />}/>
        <Route path="/meatpoultry" element={<MeatPoultry />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/seafood" element={<Seafood />}/>
        <Route path="/bakery" element={<Bakery />}/>
        <Route path="/spices" element={<SpiceItemsList />}/>
        <Route path="/grains" element={<GrainItemsList />}/>
        <Route path="/bevarages" element={<BeverageItemsList />}/>
        <Route path="/drygoods" element={<DryGoodsItemsList />}/> 
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;