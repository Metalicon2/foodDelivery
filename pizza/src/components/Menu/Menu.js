import React from 'react';
import './Menu.css';
import { InlineIcon } from "@iconify/react";
import cartOutline from '@iconify/icons-mdi/cart-outline';


const Menu = ({onRouteChange, checkLogin, foodCategories, chooseCateg}) => {
  console.log(`user signed in: ${checkLogin}˙`);
  const dropDown = foodCategories.map((item, i) => {
    return(
      <p onClick={(event) => {chooseCateg(item); onRouteChange('category');}} key={i}>{item}</p>
    );
  });
  return (
    <div className="noselect">
    {
    checkLogin ? 
    <header className="mymenu black-80 tc avenir pv4">
      <h1 className="mt2 mb0 baskerville i fw1 f-subheadline pa4 pt0 pb3">Food Delivery</h1>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Order.</h2>
      <h2 className="food mt2 mb0 f4 fw6 ttu tracked grow baskerville i pointer ma2" onClick={(event) => {chooseCateg('Pizza'); onRouteChange('category');}} >Food.</h2>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Anytime.</h2>
      <nav className="bt bb tc mw7 center mt4">
        <p onClick={() => onRouteChange('home')} className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l pointer">Home</p>
        <div className="dropdown">
          <p className="dropbtn hover-bg-black hover-white bg-animate pa3 ph4-l">Categories</p>
        <div className="dropdown-content pointer">
          <div>
            {dropDown}
          </div>
        </div>
        </div>
        <p onClick={() => onRouteChange('cart')} 
            className="cartelem f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l pointer">
              Cart 
            <InlineIcon icon={cartOutline} />
        </p>
        <p onClick={() => onRouteChange('logout')} className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l pointer" >Logout</p>
      </nav>
    </header> : 
    <header className="mymenu black-80 tc avenir pv4">
      <h1 className="mt2 mb0 baskerville i fw1 f-subheadline pa4 pt0 pb3">Food Delivery</h1>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Order.</h2>
      <h2 className="food mt2 mb0 f4 fw6 ttu tracked grow baskerville i pointer ma2" onClick={(event) => {chooseCateg('Pizza'); onRouteChange('category');}} >Food.</h2>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Anytime.</h2>
      <nav className="bt bb tc mw7 center mt4">
        <p onClick={() => onRouteChange('home')} className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l pointer">Home</p>
        <div className="dropdown">
          <p className="dropbtn hover-bg-black hover-white bg-animate pa3 ph4-l">Categories</p>
        <div className="dropdown-content pointer">
          <div>
            {dropDown}
          </div>
        </div>
        </div>
        <p onClick={() => onRouteChange('login')} className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l pointer" >Login</p>
        <p onClick={() => onRouteChange('register')} className="f6 f5-l link bg-animate black-80 hover-bg-black hover-white dib pa3 ph4-l pointer" >Register</p>
      </nav>
    </header>
    }
  </div>
  );
}

export default Menu;