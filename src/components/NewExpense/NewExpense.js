import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './style/NewExpense.css'

const NewExpense = (props) => {
    const [addNewExpenseButton, setAddNewExpenseButton] = useState(false);
    const saveEnteredFormHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onSaveNewData(newExpenseData);
        setAddNewExpenseButton(false);
    }

    const newExpenseButtonHandler = () =>{
        setAddNewExpenseButton(true);
    }

    const hideExpenseButtonHandler = () => {
        setAddNewExpenseButton(false);
    }

    return (
        <div className='new-expense'>
            {!addNewExpenseButton && <button onClick={newExpenseButtonHandler}>Add New Expense</button>}
            {addNewExpenseButton && <ExpenseForm onSaveEnteredForm={saveEnteredFormHandler} onButtonChange={hideExpenseButtonHandler}/>}
        </div>
    )
}

export default NewExpense