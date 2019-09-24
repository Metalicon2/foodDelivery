import React from 'react';
import './Menu.css';
//import { InlineIcon } from "@iconify/react";
//import cartOutline from '@iconify/icons-mdi/cart-outline';


const Menu = ({onRouteChange, checkLogin, foodCategories, chooseCateg}) => {
  const dropDown = foodCategories.map((item, i) => {
    return(
      <p onClick={(event) => {chooseCateg(item); onRouteChange('category');}} key={i}>{item}</p>
    );
  });
  return (
    <div className="noselect">
    {
    checkLogin ? 
    <header className="black-80 tc avenir pv4">
      <h1 className="mt2 mb0 baskerville i fw1 f-subheadline pa4 pt0 pb3">Food Delivery</h1>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Order.</h2>
      <h2 className="food mt2 mb0 f4 fw6 ttu tracked grow baskerville i pointer ma2" onClick={(event) => {chooseCateg('Pizza'); onRouteChange('category');}} >Food.</h2>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Anytime.</h2>
      <nav className="br-0 bl-0 b--dotted tc mw7 center mt4">
        <a onClick={() => onRouteChange('home')} className="link-1 f4-l pointer">Home</a>
        <div className="dropdown">
          <a className="link-2 dropbtn f4-l pointer">Categories</a>
            <div className="dropdown-content f4-l pointer">
              <div>
                {dropDown}
              </div>
            </div>
        </div>
        <a onClick={() => onRouteChange('cart')} 
            className="link-1 f4-l pointer">
              Cart 
        </a>
        <a onClick={() => onRouteChange('logout')} className="link-1 f4-l pointer" >Logout</a>
      </nav>
    </header> : 
    <header className="black-80 tc avenir pv4">
      <h1 className="mt2 mb0 baskerville i fw1 f-subheadline pa4 pt0 pb3">Food Delivery</h1>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Order.</h2>
      <h2 className="food mt2 mb0 f4 fw6 ttu tracked grow baskerville i pointer ma2" onClick={(event) => {chooseCateg('Pizza'); onRouteChange('category');}} >Food.</h2>
      <h2 className="mt2 mb0 f6 fw6 ttu grow tracked ma2">Anytime.</h2>
      <nav className="br-0 bl-0 b--dotted tc mw7 center mt4">
        <a onClick={() => onRouteChange('home')} className="link-1 f4-l pointer">Home</a>
        <div className="dropdown">
          <a className="link-2 dropbtn f4-l pointer">Categories</a>
            <div className="dropdown-content f4-l pointer">
              <div>
                {dropDown}
              </div>
            </div>
        </div>
        <a onClick={() => onRouteChange('login')} className="link-1 f4-l pointer" >Login</a>
        <a onClick={() => onRouteChange('register')} className="link-1 f4-l pointer" >Register</a>
      </nav>
    </header>
    }
  </div>
  );
}

export default Menu;