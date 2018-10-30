// Expenses Reducer 

const expensesReducerDefaultState = [];


export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state, //es6 spread oparator creates new expanded array
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,// spread object opearator
						...action.updates
					};
				}else{
					return expense;
				};
			});
		default:
			return state;
	}
};


