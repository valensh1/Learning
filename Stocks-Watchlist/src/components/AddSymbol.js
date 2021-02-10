import React, { useState } from 'react';
import App from '../pages/App';

const AddSymbol = props => {
	const [symbol, setSymbol] = useState([]);

	const handleChange = event => {
		console.log(event.target.value);
		setSymbol(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('You clicked on submit');
		console.log(event.target);
		console.log(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div class="ui icon input">
				<input
					id="symbol-search"
					type="text"
					placeholder="Symbol"
					onChange={handleChange}
				/>
				<i
					onClick={handleSubmit}
					class="inverted circular search link icon"
				></i>
			</div>
		</form>
	);
};

export default AddSymbol;
