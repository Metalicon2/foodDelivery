import React from 'react';
import './Food.css';
import FoodCard from './FoodCard';

const Food = ({foodname, description, category, price, isSignedIn, putCart, id, spicy, vegatarian}) => {
	if(description === '' || description === null){
		description = 'nem érhető el leírás!';
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
				src='https://previews.123rf.com/images/olegtoka/olegtoka1805/olegtoka180500013/100817448-illustration-of-traditional-goulash-meat-dish-in-plate-.jpg'
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
				src='https://st2.depositphotos.com/6836544/11719/v/950/depositphotos_117192810-stock-illustration-drink-can-icon.jpg'
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