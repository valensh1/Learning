import React, { useState, useEffect, useRef } from 'react';
import AddSymbol from '../components/AddSymbol';
import DeleteSymbol from '../components/DeleteButton';
import EditSymbol from '../components/EditButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const alpha = require('alphavantage')({
	key: 'process.env.ALPHA_VANTAGE_API_KEY'
});

export default function App(props) {
	const [stockList, setStockList] = useState([]);
	const [symbolForSearch, setSymbolForSearch] = useState('');
	const [dataFromAPI, setDataFromAPI] = useState([
		{
			symbol: '',
			lastPrice: ''
		}
	]);

	const [DBSymbolAdd, setDBSymbolAdd] = useState([
		{
			symbol: '',
			lastPrice: ''
		}
	]);

	// console.log(dataFromAPI);
	// const APIAsArray = Object.entries(dataFromAPI);
	// console.log(APIAsArray[1][APIAsArray.length-1])

	const onFormSubmit = symbol => {
		setStockList([...stockList, symbol]);
		let symbolforSearch = symbol;
		console.log(symbolforSearch, 'is the symbol');
		console.log(typeof symbolforSearch);
		setSymbolForSearch(symbol);
		console.log(DBSymbolAdd);
		axios
			.post('http://localhost:3000/api/stocks', DBSymbolAdd)
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const todayDate = () => {
		const previousDay = true; // CHANGE THIS HERE TO FALSE TO GET CURRENT DAY
		var today = new Date();
		const previousDayFlag = previousDay
			? String(today.getDate() - 1).padStart(2, '0')
			: String(today.getDate()).padStart(2, '0');
		var dd = String(today.getDate()).padStart(2, '0'); // gets day of month - padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted
		var mm = String(today.getMonth() + 1).padStart(2, '0'); // gets month - January is 0! . padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted
		var yyyy = today.getFullYear(); // gets current year
		let todaysDate = `${yyyy}-${mm}-${previousDayFlag}`;
		return todaysDate;
	};

	useEffect(() => {
		(async () => {
			if (symbolForSearch) {
				try {
					const response = await fetch(
						alpha.data.daily_adjusted(symbolForSearch).then(data => {
							console.log(response);
							console.log(data);
							//setDataFromAPI(data);
							setDataFromAPI([
								...dataFromAPI,
								{
									symbol: symbolForSearch,
									lastPrice:
										data['Time Series (Daily)'][todayDate()][
											'5. adjusted close'
										]
								}
							]);
							setDBSymbolAdd({
								symbol: symbolForSearch,
								lastPrice:
									data['Time Series (Daily)'][todayDate()]['5. adjusted close']
							});
						})
					);
				} catch (error) {
					console.error(error);
				}
			}
		})();
	}, [stockList]);

	let count = 1;
	console.log(dataFromAPI);

	/*
	alpha.data.daily_adjusted(`nflx`).then(data => {
		console.log(data);
		console.log(data['Time Series (Daily)']);
		console.log(data['Time Series (Daily)']['2021-02-09']['1. open']);
	});
	*/

	return (
		<div className="total-container">
			<AddSymbol onFormSubmit={onFormSubmit} />
			<br />
			<ul>
				{stockList.map(stock => {
					return (
						<div className="watchlist-container">
							<li key={`${stock}${count++}`}>{stock.toUpperCase()}</li>
							<DeleteSymbol />
							<EditSymbol />
						</div>
					);
				})}
			</ul>
		</div>
	);
}
