import React from 'react';
import './Cart.css';

const Cart = ({orders, updateCart, orderFood}) => {
	let pay = 0;
	const row = orders.map((item, i) => {
		pay += item.price;
	    return(
			<tr key={i} className="stripe-dark">
		        <td className="pa3">{item.foodname}</td>
		        <td className="pa3">{item.price} Ft</td>
		        <td>
		        	<button onClick={() => updateCart(item.id, item.foodname, item.price)} className='f6 grow no-underline ph2 pv1 mb2 dib white bg-dark-red pointer ma2'> X </button>
		        </td>
			</tr>	
	    );
  	});
	return(
		<div className="noselect">
			<div className="pa4">
			  <div className="overflow-auto">
			    <table className="f6 w-80 mw6 center tc" cellSpacing="0">
			      <thead>
			        <tr className="stripe-dark">
			          <th className="fw6 tl pa3 bg-white tc">Food</th>
			          <th className="fw6 tl pa3 bg-white tc">Price</th>
			          <th className="fw6 tl pa3 bg-white tc">Order?</th>
			        </tr>
			      </thead>
			      <tbody className="lh-copy">
			        {row}
			      </tbody>
			    </table>
			  </div>
			</div>
			<div className="pa3">
			  	<div className="overflow-auto">
					<table className="f6 w-80 mw6 center tc" cellSpacing="2">
				      <thead>
				        <tr className="stripe-dark">
				          <th className="fw6 tl pa3 bg-white tc">Pay Check:</th>
				          <th className="fw6 tl pa3 bg-white tc">{pay} Ft</th>
				        </tr>
				      </thead>
					</table>
				</div>
			</div>
			<div className='myButton'>
				<button onClick={() => orderFood()} className='f6 grow no-underline ph3 pv2 mb2 dib white bg-dark-green pointer ma2'> Order! </button>
			</div>
		</div>
	);
}

export default Cart;