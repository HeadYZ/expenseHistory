import './ExpenseItem.css'
import Card from '../UI/Card'
export default function ExpenseItem(expenses) {
	const month = expenses.date.toLocaleString('en-US', { month: 'long' })
	const day = expenses.date.toLocaleString('en-US', { day: '2-digit' })
	const year = expenses.date.getFullYear()

	return (
		<Card className='expense-item'>
			<div className='expense-date'>
				<p className='expense-date__month'>{month}</p>
				<p className='expense-date__day'>{day}</p>
				<p className='expense-date__year'>{year}</p>
			</div>
			<div className='expense-item__description'>
				<h2>{expenses.title}</h2>
				<div className='expense-item__price'>{expenses.amount}</div>
			</div>
		</Card>
	)
}
