import React, { useState, useEffect, useRef } from 'react';
import AddSymbol from '../components/AddSymbol';
const alpha = require('alphavantage')({
	key: 'process.env.ALPHA_VANTAGE_API_KEY'
});

export default function App(props) {
	const [stockList, setStockList] = useState([]);

	alpha.data.daily_adjusted(`nflx`).then(data => {
		console.log(data);
		console.log(data['Time Series (Daily)']);
		console.log(data['Time Series (Daily)']['2021-02-09']['1. open']);
	});

	return (
		<div>
			<AddSymbol />
		</div>
	);
}
