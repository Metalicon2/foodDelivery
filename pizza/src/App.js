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

  //Kosárhoz hozzáadás
  const putCart = (foodname, price) => {
    if(price + pay >= 20000){
      return alert.show('You cannot put more items into the Cart!');
    }
    const res = window.confirm('You want to put this into the cart?');
    if(!res){
      return;
    }
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
    const res = window.confirm(`You want to delete this order: ${foodname}?`);
    if(!res){
      return;
    }
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
    onRouteChange('order');
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
    let categories1 = [foods[0].category];
    foods.sort((a,b) => {
      if(a.category.localeCompare(b.category) !== 0 && !categories1.includes(a.category)){
          categories1.push(a.category);
      }
    });
    setCategories(categories1);
  }

  const listCategory = (categ) => {
    setCategory(categ);
  }

  //Routing
  const onRouteChange = (thisroute) => {
    if(thisroute === 'signedin'){
      alert.success('You have logged in succesfully!', {
        onClose: () => {
          setIsSignedIn(true);
          setRoute(thisroute);
        }
      });
      setCategory('');
    }else if(thisroute === 'logout'){
      const res = window.confirm('Are you sure?');
      if(!res){return;}
      setOrders([]);
      setPay(0);
      alert.success('You have logged out!', {        
        onClose: () => {
         setIsSignedIn(false);
         setRoute(thisroute);
      }});
    }else{
      setRoute(thisroute);
    }
}

  return(
    <div>
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
    </div>
  );
}

export default withAlert()(App);
