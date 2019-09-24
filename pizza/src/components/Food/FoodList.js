import React from 'react';
import Food from './Food';
import './Food.css';

const FoodList = ({foods, categoryState, route, isSignedIn, onRouteChange, putCart}) => {
	const a = isSignedIn ? null : <p onClick={() => onRouteChange('login')} className='alert pointer mb4 f3'>A rendeléshez be kell jelentkezned!</p>;
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