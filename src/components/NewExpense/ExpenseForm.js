import './ExpenseForm.css'

export default function ExpenseForm() {
	return (
		<form action=''>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input id='title' type='text' />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Title</label>
					<input id='amount' type='number' min='0.01' step='0.01' />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Title</label>
					<input id='date' type='date' min='2020-01-01' max='2023-10-01' />
				</div>
			</div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
		</form>
	)
}
