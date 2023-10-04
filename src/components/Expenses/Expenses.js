import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

export default function Expenses(props) {
	return (
		<Card className='expenses'>
			{props.expenses.map(expense => (
				<ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id}></ExpenseItem>
			))}
		</Card>
	)
}
