import React from 'react';
const User = (props) => {
	// console.warn(props.data.name);
	const { data } = props;
	return (
		<div>
			<h2>User Component</h2>
			<h4>{props.data.name}</h4>
			{/* or use this  */}
			<h4>{data.name}</h4>
			<h4>{data.age}</h4>
		</div>
	);
};

export default User;
