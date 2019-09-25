import React, {useState} from 'react';
import { withAlert } from 'react-alert';

const OrderForm = ({onRouteChange, orders, resetOrders, alert}) => {

	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	//const [foodname, setFoodname] = useState('');
	//const [price, setPrice] = useState('');

	const onNameChange = (event) => {
		setName(event.target.value);
	}

	const onLocationChange = (event) => {
		setLocation(event.target.value);
	}

	const onPhoneNumberChange = (event) => {
		setPhonenumber(event.target.value);
	}

	const onSubmitOrder = () => {
		if(isValidForm()){
			return alert.error('Wrong format!');
		}
		fetch('https://otifoodapi.herokuapp.com/order', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        name: name,
	        location: location,
	        phonenumber: phonenumber,
	        foodname: orders.map(item => ({ foodname: item.foodname })),
	        price: orders.map(item => ({ price: item.price }))
	      })
	    })
	    .then(res => res.json())
	    .then(data => {
	    	console.log(data);
	    	if(data === 'error'){
				alert.error('Something went wrong sending your orders!');
			}else{
				alert.success('Succesful order!');
				onRouteChange('orders');
			}
		});
	}

	const isValidForm = () => {
		if(!phonenumber.includes('+') || phonenumber.length !== 12){
			return true;
		}else{
			return false;
		}
	}

	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Personal data</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="name"  
			        	id="name"
			        	onChange={onNameChange}
			        	/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Location</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="location"  
			        	id="location"
			        	onChange={onLocationChange}
			        	/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Phone number</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="phone"  
			        	id="phone"
			        	onChange={onPhoneNumberChange}
			        	placeholder='+3612345678'
			        	/>
			      </div>
			    </fieldset>
			    <div className="lh-copy mt3">
			      <input 
			      onClick={onSubmitOrder} 
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="button" 
			      value="Order"
			      />
			    </div>
			  </form>
			</main>
		</article>
	);
}

export default withAlert()(OrderForm)