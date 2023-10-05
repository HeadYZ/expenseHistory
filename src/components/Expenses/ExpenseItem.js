import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'
export default function ExpenseItem(expenses) {
	const month = expenses.date.toLocaleString('en-US', { month: 'long' })
	const day = expenses.date.toLocaleString('en-US', { day: '2-digit' })
	const year = expenses.date.getFullYear()
	const [title, setTitle] = useState(expenses.title)

	const setTitleHandler = () => {
		setTitle('dziala')
	}

	return (
		<Card className='expense-item'>
			<div className='expense-date'>
				<p className='expense-date__month'>{month}</p>
				<p className='expense-date__day'>{day}</p>
				<p className='expense-date__year'>{year}</p>
			</div>
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<p className='expense-item__price'>${expenses.amount}</p>
			</div>
			<button onClick={setTitleHandler}>Cos do klikniecia</button>
		</Card>
	)
}
