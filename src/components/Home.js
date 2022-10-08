import React from 'react';
import './Home.css';

function Home(props) {
	console.warn('Home', props);
	return (
		<div>
			<h1>Home Component</h1>
			<div className="cart-wrapper">
				<div className="img-wrapper item">
					<img src="background.jpg" alt="random img" />
				</div>
				<div className="text-wraper item">
					<span>Life is beautiful</span>
					<span>Price : $1200.00</span>
				</div>
				<div className="btn-wrapper item">
					<button
						onClick={() =>
							props.addToCartHandler({ price: 1000, name: 'i Phone' })
						}>
						Add to cart
					</button>
					<button
						className="remove-cart-btn"
						onClick={() => props.removeToCartHandler()}>
						Remove to cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
