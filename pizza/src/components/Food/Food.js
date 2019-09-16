import React from 'react';
import './Food.css';
import FoodCard from './FoodCard';

const Food = ({foodname, description, category, price, isSignedIn, putCart, id, spicy, vegatarian}) => {
	if(description === '' || description === null){
		description = '';
	}
	switch(category){
		case 'Starter' : 
			return (
				<FoodCard
				foodname={foodname}
				description={description}
				price={price}
				isSignedIn= {isSignedIn}
				src='https://payload.cargocollective.com/1/12/405306/6004450/fried-egg-illustration-watercolour-painting-egg-hopper.jpg'
				putCart={putCart}
				id={id}
				spicy={spicy}
				vegatarian={vegatarian}
				/>
			);
		case 'Soup' :
			return (
				<FoodCard
				foodname={foodname}
				description={description}
				price={price}
				isSignedIn= {isSignedIn}
				src='https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170719470/83132804-hot-soup-bowl-icon-vector-illustration-graphic-design.jpg'
				putCart={putCart}
				id={id}
				spicy={spicy}
				vegatarian={vegatarian}
				/>
			);
		case 'MainDish' : 
			return (
				<FoodCard
				foodname={foodname}
				description={description}
				price={price}
				isSignedIn= {isSignedIn}
				src='https://i.pinimg.com/originals/bb/e6/76/bbe67611ceb603b9a45066bc559d2906.png'
				putCart={putCart}
				id={id}
				spicy={spicy}
				vegatarian={vegatarian}
				/>
			);
		case 'Pizza' : 
			return (
				<FoodCard
				foodname={foodname}
				description={description}
				price={price}
				isSignedIn= {isSignedIn}
				src='https://previews.123rf.com/images/sabelskaya/sabelskaya1607/sabelskaya160700071/60096119-set-of-various-pizza-pieces-sketch-style-vector-illustration-isolated-on-white-background-slices-of-.jpg'
				putCart={putCart}
				id={id}
				spicy={spicy}
				vegatarian={vegatarian}
				/>
			);
		case 'Dessert' : 
			return (
				<FoodCard
				foodname={foodname}
				description={description}
				price={price}
				isSignedIn= {isSignedIn}
				src='https://previews.123rf.com/images/lihanna/lihanna1708/lihanna170800008/83296607-vector-illustration-of-a-halloween-purple-cupcake-on-a-white-background-happy-halloween-scary-sweets.jpg'
				putCart={putCart}
				id={id}
				spicy={spicy}
				vegatarian={vegatarian}
				/>
			);
		case 'Drink' : 
			return (
				<FoodCard
				foodname={foodname}
				description={description}
				price={price}
				isSignedIn= {isSignedIn}
				src='https://previews.123rf.com/images/petitelili/petitelili1611/petitelili161100130/68571256-vector-cartoon-illustration-with-isolated-hand-drawn-cute-orange-exotic-cocktail-with-umbrella-vecto.jpg'
				putCart={putCart}
				id={id}
				spicy={spicy}
				vegatarian={vegatarian}
				/>
			);
		default: return null;
	}
}

export default Food;