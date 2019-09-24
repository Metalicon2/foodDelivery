import React, {useState} from 'react';
import { useAlert } from "react-alert";

const Register = ({onRouteChange}) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const alert = useAlert();

	const onSubmitRegister = () => {
		if(isValidForm()){
			return alert.show('Wrong format!');
		}
		fetch('https://otifoodapi.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(res => res.json())
		.then(data => {
			if(data === 'error'){
				alert.error('User already exists!');
			}else{
				alert.success('Successful registration!')
				onRouteChange('login');
			}
		});
	}

	const isValidForm = () => {
		if(!email.includes('@') || password.length < 5 || password.length > 30 || !email.includes('.')){
			return true;
		}else{
			return false;
		}
	}

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	}

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
			        	onChange={onEmailChange}
			        	/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Password*</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="password" 
			        	name="password"  
			        	id="password"
			        	onChange={onPasswordChange}
			        	/>
			      </div>
			    </fieldset>
			    <div className="lh-copy mt3">
			      <input 
			      onClick={onSubmitRegister} 
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

export default Register;