import React from 'react';
import './Food.css';
//import { InlineIcon } from '@iconify/react';
//import alertIcon from '@iconify/icons-mdi/alert';
//import greenSalad from '@iconify/icons-emojione/green-salad';
import { useAlert } from "react-alert";

const FoodCard = ({foodname, description, price, src, isSignedIn, putCart, id, spicy, vegatarian}) => {
	const alert = useAlert();
	console.log(foodname.length)
	return (
		<div id='grow' className='dib tc br3 ma2 bw2 shadow-3'>
			<div className="container">
				<img src={src}
				width='200px' height='auto' alt="Avatar" className="image"/>
				<div className="overlay">
					<div className="text">{`${description}`}</div>
				</div>
			</div>
			{	
					spicy === 1 && vegatarian === 1 ? 
					foodname.length < 25 ? 
					<h3 onClick={() => alert.show("You have to log in to order!")} className='tooltip b fw9 f4 pointer'> {foodname} 
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3> :
					<h3 style={{overflow: 'hidden', width: '220px', marginTop: '9px', marginBottom: '9px'}} onClick={() => alert.show("You have to log in to order!")} className='tooltip b fw9 f4 pointer'> {foodname} 
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3>
				:
				(
					spicy === 1 ? 
					foodname.length < 25 ? 
					<h3 onClick={() => alert.show("You have to log in to order!")} className='tooltip b fw9 f4 pointer'> {foodname} 
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3> :
					<h3 style={{overflow: 'hidden', width: '220px', marginTop: '9px', marginBottom: '9px'}} onClick={() => alert.show("You have to log in to order!")} className='tooltip b fw9 f4 pointer'> {foodname} 
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3>
				:
				(
					vegatarian === 1 ?
					foodname.length < 25 ? 
					<h3 onClick={() => alert.show("You have to log in to order!")} className='tooltip b fw9 f4 pointer'> {foodname} 
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3> :
					<h3 style={{overflow: 'hidden', width: '220px', marginTop: '9px', marginBottom: '9px'}} onClick={() => alert.show("You have to log in to order!")} className='tooltip b fw9 f4 pointer'> {foodname} 
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3>
				:
					foodname.length < 25 ? 
					<h3 onClick={() => alert.show("You have to log in to order!")} className='b fw9 f4 pointer'> {foodname}
					</h3> :
					<h3 style={{overflow: 'hidden', width: '220px', marginTop: '9px', marginBottom: '9px'}} onClick={() => alert.show("You have to log in to order!")} className='b fw9 f4 pointer'> {foodname} </h3>
				)) 
			}
			<p className='price pa2'> {`${price} Ft`} </p>
			{
				isSignedIn ? <button onClick={() => putCart(foodname, price)} className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black pointer ma2'> Cart </button> : console.log('')
			}
		</div>
	);
}

export default FoodCard;