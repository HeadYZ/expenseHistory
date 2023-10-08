import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {
	const [showForm, setShowForm] = useState(false)

	const showFormHandler = () => {
		setShowForm(true)
	}
	const hideFormHandler = () => {
		setShowForm(false)
	}

	return (
		<div className='new-expense'>
			{showForm ? (
				<ExpenseForm newExpenseHandler={props.newExpenseHandler} onHideHandler={hideFormHandler}></ExpenseForm>
			) : (
				<button onClick={showFormHandler}>Add New Expense </button>
			)}
		</div>
	)
}
