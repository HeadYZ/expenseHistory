import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter.js'
import './Expenses.css'
import { useState } from 'react'

export default function Expenses(props) {
	const [filtedExpenses, setFiltredExpenses] = useState(props.expenses)

	const filteredExpensesHandler = selectedDate => {
		const filtredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedDate)

		setFiltredExpenses(filtredExpenses)
	}

	return (
		<Card className='expenses'>
			<ExpenseFilter onChangeDate={filteredExpensesHandler}></ExpenseFilter>
			{filtedExpenses.map(expense => (
				<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id}></ExpenseItem>
			))}
		</Card>
	)
}
