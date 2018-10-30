import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


let addExpense, history, wrapper;

// In a lot of test cases we find duplicate code
// Globals(beforeEach), AfterEach, BeforeAll, AfterAll --> life cycle methods for test cases

// It is called before each test case
beforeEach(() => {
	addExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})


test('should render AddExpensePage correctly', () => {
	//beforeEach called here
	expect(wrapper).toMatchSnapshot();
});

test('should handle on onSubmit', () => {
	//beforeEach called here
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});