import { createStore } from 'redux';

//Action generators - functions that return action objects


const incrementCount = ({ incrementBy=1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});


const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});


const setCount = ({count} = {}) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET',
});

// Reducers
// Attributes of Reducers
// 1. Reducers are pure functions. Just use state and action
// 2. Never change state or action directly(just return result)


const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			}; 
		default:
			return state;
	}

};

//track data changes
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState())
});// we can watch state store  changes gets called every time a state changes
//subscribe the data and make meaningful changes when the state changes


//Actions - than an object that gets sent to the store


//increment the count
// store.dispatch({
// 	type: 'INCREMENT', //convention for action type to be capital
// 	incrementBy: 5
// });//send it to the store

// store.dispatch({
// 	type: 'INCREMENT' //convention for action type to be capital
// });//send it to the store


store.dispatch(incrementCount({ incrementBy: 5 }));
  
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count:-100 }))


//With Generator functions we are able to vastly simplify things that we use a lot and make slightly more complex something we only need to to 1 time.