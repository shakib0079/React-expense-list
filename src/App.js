import React, { useState } from 'react'
import ExpenseComponent from './components/Expense/ExpenseComponent'
import NewExpense from './components/NewExpense/NewExpense'

const Initial_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [allExpenses, setAllExpenses] = useState(Initial_Expenses);
  
  
  const newDataHandler = (expenses) => {
    setAllExpenses(prevState => {
      return [expenses, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onSaveNewData={newDataHandler}/>
      <ExpenseComponent expenses={allExpenses}/>
    </div>
  )
}

export default App