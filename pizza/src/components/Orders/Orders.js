import React , {useState,useEffect, useRef} from 'react';

const Orders = ({orders, updateCart, orderFood}) => {

	let [count, setCount] = useState(10);
	const [isRunning, setIsRunning] = useState(true);

	const useInterval = (callback, delay) => {
	  const savedCallback = useRef();

	  // Remember the latest callback.
	  useEffect(() => {
	    savedCallback.current = callback;
	  }, [callback]);

	  // Set up the interval.
	  useEffect(() => {
	    function tick() {
	      savedCallback.current();
	    }
	    if (delay !== null) {
	      let id = setInterval(tick, delay);
	      return () => clearInterval(id);
	    }
	  }, [delay]);
	}

	useInterval(()=>{
		setCount(count - 1);
		console.log(count);
		if(count === 1){
			setIsRunning(false);
		}
	}, isRunning ? 1000 : null);

	let pay = 0;

	const row = orders.map((item, i) => {
		pay += item.price;
	    return(
			<tr key={i} className="stripe-dark">
		        <td className="grow pa3">{item.foodname}</td>
		        <td className="grow pa3">{item.price} Ft</td>
			</tr>	
	    );
  	});

	return(
		<div className="noselect">
			<h1 className='tc'> Thanks for your Order! </h1>
			<h3 className='tc'> You will be redirected to Home in: {count} sec!</h3>
			<div className="pa4">
			  <div className="overflow-auto">
			    <table className="f6 w-80 mw6 center tc" cellSpacing="0">
			      <thead>
			        <tr className="stripe-dark">
			          <th className="fw6 tl pa3 bg-white tc">Your Orders:</th>
			          <th className="fw6 tl pa3 bg-white tc">Price</th>
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
				          <th className="fw6 tl pa3 bg-white tc">Paid:</th>
				          <th className="fw6 tl pa3 bg-white tc">{pay} Ft</th>
				        </tr>
				      </thead>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Orders;