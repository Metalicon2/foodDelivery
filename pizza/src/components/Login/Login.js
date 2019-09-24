import React, {useState} from 'react';
import './Login.css';
import { useAlert } from "react-alert";

const Login = ({onRouteChange, loadUser}) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const alert = useAlert();

	const onSubmitSignin = () => {
		if(isValidForm()){
			return alert.show('Wrong format!');
		}
		fetch('https://otifoodapi.herokuapp.com/login', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(res => res.json())
		.then(data => {
			if(data === 'wrong password'){
				alert.error('Wrong password!');
			}else if(data === 'no such user'){
				alert.error('You dont have an account!');
			}else{
				alert.success('You have signed in!');
				onRouteChange('signedin');
				loadUser({
					email: email,
					password: password
				});
			}
		});
	}

	const onEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const isValidForm = () => {
		if(!email.includes('@') || password.length < 5 || password.length > 30 || !email.includes('.')){
			return true;
		}else{
			return false;
		}
	}

	return (
		<article id="grow1" className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0 pa3 pointer">Login</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="email" 
			        	name="email-address"  
			        	id="email-address"
			        	onChange={onEmailChange}
			        	/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" >Password</label>
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
			      onClick={onSubmitSignin} 
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="button" 
			      value="Login"
			      />
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" onClick={() => {onRouteChange('register')}}className="f6 link dim black db">Sign up</a>
			      <a href="#0" onClick={() => {alert.show('Not implemented yet!')}} className="f6 link dim black db">Forgot your password?</a>
			    </div>
			  </form>
			</main>
		</article>
	);
}

export default Login;