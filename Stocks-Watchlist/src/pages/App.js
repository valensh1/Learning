import React, { useState, useEffect, useRef } from 'react';
import AddSymbol from '../components/AddSymbol';
import DeleteSymbol from '../components/DeleteButton';
import EditSymbol from '../components/EditButton';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StockNews from './StockNews';

const alpha = require('alphavantage')({
	key: 'process.env.ALPHA_VANTAGE_API_KEY'
});

export default function App(props) {
	const [stockList, setStockList] = useState([]); // sets state for total stock list to render
	const [dataFromAPI, setDataFromAPI] = useState([
		// sets state for relevant information basically just lastPrice from API
		{
			symbol: '',
			lastPrice: ''
		}
	]);

	const [DBSymbolAdd, setDBSymbolAdd] = useState([
		// sets state to send to MongoDB
		{
			symbol: '',
			lastPrice: ''
		}
	]);

	const APIDataPull = symbol => {
		(async () => {
			if (symbol) {
				try {
					console.log(symbol);
					const response = await fetch(
						alpha.data.daily_adjusted(symbol).then(data => {
							console.log(response);
							console.log(data);
							//setDataFromAPI(data);
							setDataFromAPI([
								...dataFromAPI,
								{
									symbol: symbol,
									lastPrice:
										data['Time Series (Daily)'][todayDate()][
											'5. adjusted close'
										]
								}
							]);
							setDBSymbolAdd({
								symbol: symbol,
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
	};

	const sendToDB = async () => {
		await axios
			.post('http://localhost:3000/api/stocks', DBSymbolAdd)
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const onFormSubmit = (symbol, event) => {
		event.preventDefault();
		APIDataPull(symbol);
		setStockList([...stockList, symbol]);
		console.log(symbol, 'is the symbol');
		sendToDB();
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

	let count = 1;

	return (
		<div className="total-container">
			<AddSymbol onFormSubmit={onFormSubmit} />
			<br />
			<ul>
				{stockList.map(stock => {
					return (
						<div className="watchlist-container">
							<Link to={'/stocknews'}>
								<li key={`${stock}${count++}`}>{stock.toUpperCase()}</li>
							</Link>
							<DeleteSymbol />
							<EditSymbol />
						</div>
					);
				})}
			</ul>
		</div>
	);
}

/*
	alpha.data.daily_adjusted(`nflx`).then(data => {
		console.log(data);
		console.log(data['Time Series (Daily)']);
		console.log(data['Time Series (Daily)']['2021-02-09']['1. open']);
	});
	*/

/*
	useEffect(() => {
		(async () => {
			if (symbolForSearch) {
				try {
					const response = await fetch(
						alpha.data.daily_adjusted(symbolForSearch).then(data => {
							console.log(response);
							console.log(data);
							//setDataFromAPI(data);
							await setDataFromAPI([
								...dataFromAPI,
								{
									symbol: symbolForSearch,
									lastPrice:
										data['Time Series (Daily)'][todayDate()][
											'5. adjusted close'
										]
								}
							]);
							await setDBSymbolAdd({
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
	*/
