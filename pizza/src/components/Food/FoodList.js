import React from 'react';
import Food from './Food';
import './Food.css';

const FoodList = ({foods, categoryState, route, isSignedIn, onRouteChange, putCart}) => {
	console.log(categoryState);
	const a = isSignedIn ? console.log('') : <p onClick={() => onRouteChange('login')} className='alert pointer grow pa3 mb4 ma1 f4'>A rendeléshez be kell jelentkezned!</p>;
	return(
		<div>
		{a}
			{ 
				foods.map((item, i) => {
					if(categoryState === item.category){
						return (
							<Food 
							foodname= {item.name}
							description= {item.description}
							category= {item.category}
							price= {item.price}
							id= {item.id}
							spicy= {item.spicy}
							vegatarian= {item.vegatarian}
							key= {i}
							isSignedIn= {isSignedIn}
							putCart= {putCart}
							/>
						);
					}
				})
			}
		</div>
	);
}

export default FoodList;