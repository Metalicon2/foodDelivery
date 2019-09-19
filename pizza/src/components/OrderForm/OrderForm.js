import React from 'react';

class OrderForm extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			location: '',
			phonenumber: '',
			foodname: '',
			price: ''
		}
	}

	onNameChange = (event) => {
		console.log(event.target.value);
		this.setState({name: event.target.value});
	}

	onLocationChange = (event) => {
		console.log(event.target.value);
		this.setState({location: event.target.value});
	}

	onPhoneNumberChange = (event) => {
		console.log(event.target.value);
		this.setState({phonenumber: event.target.value});
	}

	onSubmitOrder = () => {
		if(this.isValidForm()){
			return alert('Wrong format!');
		}
		const {onRouteChange, orders, resetOrders} = this.props;

		fetch('https://otifoodapi.herokuapp.com/order', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        name: this.state.name,
	        location: this.state.location,
	        phonenumber: this.state.phonenumber,
	        foodname: orders[0].foodname,
	        price: orders[0].price
	      })
	    })
	    .then(res => res.json())
	    .then(data => {
	    	if(data === 'error'){
				alert('Something went wrong sending your orders!');
			}else{
				alert('Succesful order!');
				onRouteChange('home');
				resetOrders();
			}
		}
	    );
		}

	isValidForm = () => {
		if(!this.state.phonenumber.includes('+') || this.state.phonenumber.length !== 12){
			return true;
		}else{
			return false;
		}
	}

	render(){
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
				        	onChange={this.onNameChange}
				        	/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" >Location</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="location"  
				        	id="location"
				        	onChange={this.onLocationChange}
				        	/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" >Phone number</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="phone"  
				        	id="phone"
				        	onChange={this.onPhoneNumberChange}
				        	/>
				      </div>
				    </fieldset>
				    <div className="lh-copy mt3">
				      <input 
				      onClick={this.onSubmitOrder} 
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
}

export default OrderForm;