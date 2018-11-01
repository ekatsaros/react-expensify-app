//A very small app.js file.Boostraping the application.Application is  more easy to visualize maintain Update and Test
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visibles ones to screen

// console.log(store.getState());
const jsx = (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);

ReactDOM.render(jsx, document.getElementById('app'));


