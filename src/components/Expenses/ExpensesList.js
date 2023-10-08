import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found.</h2>
	}

	return (
		<ul>
			{props.items.map(expense => (
				<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id}></ExpenseItem>
			))}
		</ul>
	)
}
