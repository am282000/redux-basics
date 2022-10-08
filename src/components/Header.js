import React from 'react';
import './Home.css';

function Header(props) {
	console.warn('Header', props.data);
	return (
		<div>
			<div className="add-to-cart">
				<span className="cart-count">{props.data.length}</span>
			</div>
		</div>
	);
}

export default Header;
