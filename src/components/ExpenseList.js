//Stateless Functional Components

import React from 'react';
// we create HOC using the connect function redux
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length === 0 ? (
					<p>No expenses</p>
				) : (
					props.expenses.map((expense) => {
			return <ExpenseListItem key={expense.id} {...expense} />;
		})
			)
		}
	
	</div>
	);

//common practice to take function and break up in its own variable
//it is a function that maps the store state to component props
const mapStateToProps = (state) => {
	// take just a subset from store the one we only require
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};


export default connect(mapStateToProps)(ExpenseList);



//When you connect a component to the redux store it's  reactive as the store changes the component rerenders