import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter.js'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import { useState } from 'react'

export default function Expenses(props) {
	const [selectedDate, setSelectedDate] = useState('2023')

	const filteredExpensesHandler = selectedDate => {
		setSelectedDate(selectedDate)
	}
	const filtredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedDate)

	return (
		<Card className='expenses'>
			<ExpenseFilter onChangeDate={filteredExpensesHandler}></ExpenseFilter>
			<ExpensesChart expenses={filtredExpenses}></ExpensesChart>
			<ExpensesList items={filtredExpenses}></ExpensesList>
		</Card>
	)
}
