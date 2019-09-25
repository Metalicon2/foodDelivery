import React, {useState, useEffect} from 'react';
import FoodList from './components/Food/FoodList';
import Scroll from './components/Scroll/Scroll';
import Menu from './components/Menu/Menu';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import Particles from './components/Particles/Particles';
import { withAlert } from 'react-alert';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

const App = ({alert}) => {

  //Setting state variables
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] =  useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  const [route, setRoute] = useState('home');
  const [isSignedIn, setIsSignedIn] =  useState(false);
  const [category, setCategory] = useState('');
  const [pay, setPay] = useState(0);
  const [id, setId] = useState(0);
  const [blocking, setBlocking] = useState(false);

  const toggleBlocking = (param) => {
    setBlocking(param);
  }

  //Kosárhoz hozzáadás
  const putCart = (foodname, price) => {
    if(price + pay >= 20000){
      return alert.error('You cannot put more items into the Cart!');
    }
    alert.success(`${foodname} has been put into the cart!`);
    payBound(price);
    setOrders([
      ...orders,
    {
      foodname: foodname,
      price: price,
      id: id
    }]);
  }

  //Kosár visszaállítása alaphelyzetbe
  const resetOrders = () => {
    setOrders([]);
  }

  //Rendelés törlése
  const updateCart = (id, foodname, price) => {
    alert.success(`${foodname} has been removed from the cart!`);
    let orderItem = orders.find((item) => {
        return item.id === id;
    });
    setPay(pay - orderItem.price);
    const filteredCart = orders.filter((item) => {
      return item.id !== id;
    });
    setOrders(filteredCart);
  }

  const payBound = (price) => {
    setId(id + 1);
    setPay(pay + price);
  }

  const loadUser = (user) => {
    setUser(user);
  }

  const orderFood = () => { 
    orders.length === 0 ? alert.show('The cart is empty!') : onRouteChange('order');
  }

  async function fetchData() {
    const res = await fetch('https://otifoodapi.herokuapp.com/home');
    res
      .json()
      .then(res => {
        setFoods(res);
        sortCategories(res);
      }
      );
  }

  useEffect(() => {
    fetchData();
    onRouteChange('home');
  }, []);

  //ételkategóriák kiválogatása listába adatbázisból dinamikusan
  const sortCategories = (foods) => {
    let myCategories = [foods[0].category];
    foods.sort((a,b) => {
      if(a.category.localeCompare(b.category) !== 0 && !myCategories.includes(a.category)){
          myCategories.push(a.category);
      }
    });
    setCategories(myCategories);
  }

  const listCategory = (categ) => {
    setCategory(categ);
  }

  //Routing
  const onRouteChange = (thisroute) => {
    if(thisroute === 'signedin'){
      alert.success('You have logged in!', {
        timeout: 5000,
        onOpen: () => {
          toggleBlocking(true);
        },
        onClose: () => {
          setIsSignedIn(true);
          setRoute(thisroute);
          toggleBlocking(false);
        }
      });
      setCategory('');
    }else if(thisroute === 'logout'){
      const res = window.confirm('Are you sure?');
      if(!res){return;}
      setOrders([]);
      setPay(0);
      alert.success('You have logged out!', {    
        onOpen: () => {
          toggleBlocking(true);
        },   
        onClose: () => {
         setIsSignedIn(false);
         setRoute(thisroute);
         toggleBlocking(false);
      }});
    }else{
      setRoute(thisroute);
    }
}

  return(
    <BlockUi style={{zIndex: '-1', height: '100vh'}} blocking={blocking}>
    <Particles className='particles' />
    <Menu chooseCateg={listCategory} foodCategories={categories} checkLogin={isSignedIn} onRouteChange={onRouteChange}/>
    {
      route === 'home' || route === 'logout' ? 
        <Home />
      :
      (route === 'login' ? <Login loadUser={loadUser} onRouteChange={onRouteChange}/>
      :
      (route === 'register' ? <Register onRouteChange={onRouteChange}/> 
      :
      (route === 'signedin' ?
        <Home />
      :
      (route === 'cart' ? <Cart orderFood={orderFood} updateCart={updateCart} orders={orders}/>
      :
      (route === 'order' ? <OrderForm resetOrders={resetOrders} orders={orders} onRouteChange={onRouteChange}/>
      :
      <div>
        <Scroll>
          <FoodList payBound={payBound} putCart={putCart} onRouteChange={onRouteChange} foods={foods} categoryState={category} route={route} isSignedIn={isSignedIn}/>
        </Scroll>
      </div>
      )))))
    }
    </BlockUi>
  );
}

export default withAlert()(App);
