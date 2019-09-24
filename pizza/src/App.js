import React from 'react';
import FoodList from './components/Food/FoodList';
import Scroll from './components/Scroll/Scroll';
import Menu from './components/Menu/Menu';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import Particles from './components/Particles/Particles';
import AlertTemplate from './components/Alert/AlertTemplate';
import { useAlert, transitions, positions, Provider } from 'react-alert';

//Alert prompt options
const options = {
  timeout: 3000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      foods: [],
      categories: [],
      orders: [],
      user: {},
      route: 'home',
      isSignedIn: false,
      category: '',
      pay: 0,
      id: 0
    }
  }

  //Kosárhoz hozzáadás
  putCart = (foodname, price) => {
    const res = window.confirm('You want to put this into the cart?');
    if(!res){
      return;
    }
    if(this.state.pay + price >= 20000){
      alert('You reached the order limit (20.000 Ft)');
      return;
    }
    this.payBound(price);
    this.setState(state => {
      state.orders.push(
        {
          foodname: foodname,
          price: price,
          id: this.state.id
        }
      );
    });
  }

  //Kosár visszaállítása alaphelyzetbe
  resetOrders = () => {
    this.setState({orders: []});
  }

  //Rendelés törlése
  updateCart = (id, foodname, price) => {
    const res = window.confirm(`You want to delete this order: ${foodname}?`);
    if(!res){
      return;
    }
    let orderItem = this.state.orders.find((item) => {
        return item.id === id;
    });
    this.setState({pay: this.state.pay - orderItem.price});
    const filteredCart = this.state.orders.filter((item) => {
      return item.id !== id;
    });
    this.setState({orders: filteredCart});
  }

  payBound = (price) => {
    this.setState({id: this.state.id + 1});
    this.setState({pay: this.state.pay + price});
  }

  loadUser = (user) => {
    this.setState({user: user});
  }

  orderFood = () => { 
    this.onRouteChange('order');
  }

  //menuitems lekérése adatbázisból
  componentDidMount(){
    fetch('https://otifoodapi.herokuapp.com/home', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      this.setState({foods: data});
      console.log(this.state.foods);
      this.sortCategories();
    });
  }

  //ételkategóriák kiválogatása listába adatbázisból dinamikusan
  sortCategories = () => {
    let categories1 = [this.state.foods[0].category];
    this.state.foods.sort((a,b) => {
      if(a.category.localeCompare(b.category) !== 0 && !categories1.includes(a.category)){
          categories1.push(a.category);
      }
    });
    this.setState({categories: categories1});
  }

  listCategory = (categ) => {
    this.setState({category: categ});
  }

  //Routing
  onRouteChange = (route) => {
    if(route === 'signedin'){
      this.setState({isSignedIn: true});
      this.setState({category: ''})
    }else if(route === 'logout'){
      const res = window.confirm('Are you sure?');
      if(!res){return;}
      this.setState({isSignedIn: false});
      this.setState({orders: []});
      this.setState({pay: 0});
    }
    this.setState({route: route});
    console.log(this.state.orders);
    console.log(this.state.pay);
  }

  //Rendering
  render(){
    return(
      <div>
      <Provider template={AlertTemplate} {...options}>
      <Particles className='particles' />
      <Menu chooseCateg={this.listCategory} foodCategories={this.state.categories} checkLogin={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {
        this.state.route === 'home' || this.state.route === 'logout' ? 
          <Home />
        :
        (this.state.route === 'login' ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        :
        (this.state.route === 'register' ? <Register myAlert={useAlert} onRouteChange={this.onRouteChange}/> 
        :
        (this.state.route === 'signedin' ?
          <Home />
        :
        (this.state.route === 'cart' ? <Cart orderFood={this.orderFood} updateCart={this.updateCart} orders={this.state.orders}/>
        :
        (this.state.route === 'order' ? <OrderForm resetOrders={this.resetOrders} orders={this.state.orders} onRouteChange={this.onRouteChange}/>
        :
        <div>
          <Scroll>
            <FoodList payBound={this.payBound} putCart={this.putCart} onRouteChange={this.onRouteChange} foods={this.state.foods} categoryState={this.state.category} route={this.state.route} isSignedIn={this.state.isSignedIn}/>
          </Scroll>
        </div>
        )))))
      }
      </Provider>
      </div>
    );
  }
}

export default App;
