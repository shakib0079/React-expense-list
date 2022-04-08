import React from 'react'
import ExpenseComponent from './components/ExpenseComponent'

const App = () => {

  const expenses = [
    {
      id: '1',
      title: 'Ball Pen',
      amount: 60,
      date: new Date(2020, 7, 14)
    },
    {
      id: '2',
      title: 'Loss paper',
      amount: 100,
      date: new Date(2021, 5, 12)
    },
    {
      id: '3',
      title: 'Smart Watch',
      amount: 6000,
      date: new Date(2022, 2, 26)
    },
    {
      id: '4',
      title: 'Smart Phone',
      amount: 34000,
      date: new Date(2021, 1, 24)
    },
    {
      id: '5',
      title: 'Cricket bat',
      amount: 800,
      date: new Date(2022, 3, 4)
    }
  ]
  

  return (
    <div>
      <ExpenseComponent expenses={expenses}/>
    </div>
  )
}

export default App