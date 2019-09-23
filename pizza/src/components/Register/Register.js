import React from 'react';

class Register extends React.Component{
	constructor(props){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	onSubmitRegister = () => {
		if(this.isValidForm()){
			return alert('Wrong format!');
		}
		const {onRouteChange} = this.props;
		fetch('https://otifoodapi.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		}).then(res => res.json())
		.then(data => {
			console.log(data);
			if(data === 'error'){
				alert('User already exists!');
			}else{
				alert('Successful registration!')
				onRouteChange('login');
			}
		});
	}

	isValidForm = () => {
		if(!this.state.email.includes('@') || this.state.password.length < 5 || this.state.password.length > 30 || !this.state.email.includes('.')){
			return true;
		}else{
			return false;
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	render(){
		return (
			<article id="grow1" className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc">
				<main className="pa4 black-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="pointer f2 fw6 ph0 pa3 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" >Email*</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
				        	onChange={this.onEmailChange}
				        	/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" >Password*</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"
				        	onChange={this.onPasswordChange}
				        	/>
				      </div>
				    </fieldset>
				    <div className="lh-copy mt3">
				      <input 
				      onClick={this.onSubmitRegister} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="button" 
				      value="Register"
				      />
				    </div>
				  </form>
				</main>
			</article>
		);
	}
}

export default Register;