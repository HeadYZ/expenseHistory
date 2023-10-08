import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')
	const titleChangeHandler = e => {
		setEnteredTitle(e.target.value)
	}
	const amountChangeHandler = e => {
		setEnteredAmount(e.target.value)
	}

	const dateChangeHandler = e => {
		setEnteredDate(e.target.value)
	}

	const submitHandler = e => {
		e.preventDefault()
		const newExpense = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
			id: Math.random().toString(),
		}
		props.newExpenseHandler(newExpense)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
		props.onHideHandler()
	}

	return (
		<form action='' onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input id='title' value={enteredTitle} type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						id='amount'
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						id='date'
						type='date'
						min='2020-01-01'
						max='2023-10-01'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onHideHandler}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}
