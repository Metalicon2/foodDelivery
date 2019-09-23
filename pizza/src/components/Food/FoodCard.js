import React from 'react';
import './Food.css';
import { InlineIcon } from '@iconify/react';
import alertIcon from '@iconify/icons-mdi/alert';
import greenSalad from '@iconify/icons-emojione/green-salad';
import { useAlert } from "react-alert";
import Alert from '../Alert/Alert';

const FoodCard = ({foodname, description, price, src, isSignedIn, putCart, id, spicy, vegatarian}) => {
	const alert = useAlert();
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
					<h3 className='tooltip b fw9 f4 pointer'> {foodname} 
						<InlineIcon color='red' icon={alertIcon} />
						<InlineIcon color='red' icon={greenSalad} />  
							<span className="tooltiptext f5">Fűszeres és vegetáriánus!</span>
					</h3>
				:
				(
					spicy === 1 ?
					<h3 className='tooltip b fw9 f4 pointer'> {foodname} 
						<InlineIcon color='red' icon={alertIcon} />
							<span className="tooltiptext f5">Fűszeres!</span>
					</h3>
				:
				(
					vegatarian === 1 ?
					<h3 className='tooltip b fw9 f4 pointer'> {foodname} 
						<InlineIcon color='red' icon={greenSalad} />
							<span className="tooltiptext f5">Vegetáriánus!</span>
					</h3>
				:
					<h3 className='b fw9 f4 pointer' onClick={() => alert.show("lol")}> {foodname} </h3>
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