import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vegetables from '../images/Vegetables.jpeg';
import Fruits from '../images/Fruits.jpg';
import DryFruits from '../images/DryFruits.jpg';
import Dairy from '../images/Dairy.jpeg';
import Meat from '../images/Meat.jpg';
import LeafyGreens from '../images/LeafyGreens.jpeg';
import Seafoods from '../images/Seafoods.jpg'
import BakeryItems from '../images/BakeryItems.webp';
import Drygoods from '../images/Drygoods.jpg';
import Spices from '../images/Spices.webp';
import Grains from '../images/Grains.jpg';
import Beverages from '../images/Beverages.jpg';
import Condiments from '../images/Condiments.jpg';
import Snacks from '../images/Snacks.jpg';
import Frozenfoods from '../images/Frozenfoods.png';
import Cannedfoods from '../images/Cannedfoods.jpg';
import Candies from '../images/Candies.jpg';
import Oils from '../images/Oils.jpg';
import "./Home.css";
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2">
            <div className="card" >
              <img src={Vegetables} className="card-img-1" alt="Vegetables" />
              <div className="card-body">
                <h5 className="card-title">Vegetables</h5>
                <a href="/vegetables" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Fruits} className="card-img-2" alt="Fruits" />
              <div className="card-body">
                <h5 className="card-title">Fruits</h5>
                <a href="/fruits" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card" >
              <img src={LeafyGreens} className="card-img-3" alt="LeafyGreens" />
              <div className="card-body">
                <h5 className="card-title">LeafyGreens</h5>
                <a href="/leaf" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={DryFruits} className="card-img-4" alt="DryFruits" />
              <div className="card-body">
                <h5 className="card-title">Dry Fruits</h5>
                <a href="/dry" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card" >
              <img src={Dairy} className="card-img-5" alt="Dairy" />
              <div className="card-body">
                <h5 className="card-title">Dairy</h5>
                <a href="/dairy" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Meat} className="card-img-6" alt="Meat" />
              <div className="card-body">
                <h5 className="card-title">Meat-Poultry</h5>
                <a href="/meatpoultry" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2">
            <div className="card" >
              <img src={Seafoods} className="card-img-7" alt="Seafoods" />
              <div className="card-body">
                <h5 className="card-title">Seafoods</h5>
                <a href="seafood" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={BakeryItems} className="card-img-8" alt="BakeryItems" />
              <div className="card-body">
                <h5 className="card-title">BakeryItems</h5>
                <a href="bakery" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card" >
              <img src={Drygoods} className="card-img-9" alt="Drygoods" />
              <div className="card-body">
                <h5 className="card-title">DryGoods</h5>
                <a href="drygoods" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Spices} className="card-img-10" alt="Spices" />
              <div className="card-body">
                <h5 className="card-title">Spices</h5>
                <a href="spices" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card" >
              <img src={Grains} className="card-img-11" alt="Grains" />
              <div className="card-body">
                <h5 className="card-title">Grains</h5>
                <a href="grains" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Beverages} className="card-img-12" alt="Beverages" />
              <div className="card-body">
                <h5 className="card-title">Beverages</h5>
                <a href="bevarages" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2">
            <div className="card" >
              <img src={Condiments} className="card-img-13" alt="Condiments" />
              <div className="card-body">
                <h5 className="card-title">Condiments</h5>
                <a href="/condiments" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Snacks} className="card-img-14" alt="Snacks" />
              <div className="card-body">
                <h5 className="card-title">Snacks</h5>
                <a href="/snacks" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card" >
              <img src={Frozenfoods} className="card-img-15" alt="Frozenfoods" />
              <div className="card-body">
                <h5 className="card-title">Frozenfoods</h5>
                <a href="/frozen" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Cannedfoods} className="card-img-16" alt="Cannedfoods" />
              <div className="card-body">
                <h5 className="card-title">Cannedfoods</h5>
                <a href="cannedfoods" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>


          <div className="col-md-2">
            <div className="card" >
              <img src={Candies} className="card-img-17" alt="Candies" />
              <div className="card-body">
                <h5 className="card-title">Candies</h5>
                <a href="candies" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card" >
              <img src={Oils} className="card-img-18" alt="Oils" />
              <div className="card-body">
                <h5 className="card-title">Oils</h5>
                <a href="oils" className="btn btn-primary"><b>Click Here</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Home