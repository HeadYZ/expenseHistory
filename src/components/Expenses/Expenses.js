import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter.js'
import './Expenses.css'
import { useEffect, useState } from 'react'

export default function Expenses(props) {
	const [filtredExpenses, setFiltredExpenses] = useState([])

	const filteredExpensesHandler = selectedDate => {
		const filtredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedDate)

		setFiltredExpenses(filtredExpenses)
	}
	useEffect(() => {
		filteredExpensesHandler('2023')
	}, [props.expenses])

	return (
		<Card className='expenses'>
			<ExpenseFilter onChangeDate={filteredExpensesHandler}></ExpenseFilter>
			{filtredExpenses.map(expense => (
				<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id}></ExpenseItem>
			))}
		</Card>
	)
}
