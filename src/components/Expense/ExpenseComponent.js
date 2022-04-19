import React, { useState } from 'react'
import ExpensesFilter from './ExpenseFilter'
import './ExpenseComponent.css'
import Card from '../UI/Card'
import ExpenseItemFilter from './ExpenseItemFilter'
import ExpenseChart from './ExpenseChart'

const ExpenseComponent = (props) => {
    

    const [selectedYear, setSelectedYear] = useState('2020');

    const selectedYearFilter = (year) =>{
        setSelectedYear(year);
    }

    const filteredYear = props.expenses.filter(item => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    

    return (
            
            <Card className='expenses'>
                <ExpenseChart expense={filteredYear}/>
                <ExpensesFilter defaultYear={selectedYear} onExpenseFilter={selectedYearFilter}/>
                <ExpenseItemFilter items={filteredYear} />
            </Card>
        
    )
}

export default ExpenseComponent