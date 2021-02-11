import React, { useState, useEffect, useRef } from 'react';
import AddSymbol from '../components/AddSymbol';
const alpha = require('alphavantage')({
	key: 'process.env.ALPHA_VANTAGE_API_KEY'
});

export default function App(props) {
	const [stockList, setStockList] = useState([]);
	const [symbolForSearch, setSymbolForSearch] = useState('');
	//need to add a useState here to then pass to where symbolforSearch is
	const onFormSubmit = symbol => {
		setStockList([...stockList, symbol]);
		let symbolforSearch = symbol;
		console.log(symbolforSearch, 'is the symbol');
		console.log(typeof symbolforSearch);
		setSymbolForSearch(symbol);
	};

	useEffect(() => {
		console.log('hello I am use effect');
	}, [stockList]);

	useEffect(() => {
		(async () => {
			if (symbolForSearch) {
				//need to add an if statement here so it doesn't update right away
				try {
					const response = await fetch(
						alpha.data.daily_adjusted(symbolForSearch).then(data => {
							console.log(response);
							console.log(data);
						})
					);
				} catch (error) {
					console.error(error);
				}
			}
		})();
	}, [stockList]);

	let count = 1;

	/*
	useEffect(() => {
		async () => {
			try {
				const response = await alpha.data.daily_adjusted(`wmt`).then(data => {
					console.log(data);
					console.log(response);
					console.log(data['Time Series (Daily)']);
					console.log(data['Time Series (Daily)']['2021-02-09']['1. open']);
				});
			} catch {
				console.error(error);
			}
		};
	}, [stockList]);
	*/

	/*
	alpha.data.daily_adjusted(`nflx`).then(data => {
		console.log(data);
		console.log(data['Time Series (Daily)']);
		console.log(data['Time Series (Daily)']['2021-02-09']['1. open']);
	});
	*/

	return (
		<div>
			<AddSymbol onFormSubmit={onFormSubmit} />
			<ul>
				{stockList.map(stock => {
					return <li key={`${stock}${count++}`}>{stock.toUpperCase()}</li>;
				})}
			</ul>
		</div>
	);
}
