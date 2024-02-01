import React from 'react'

export default function IncomeExpense({transactions}) {
    const amount = transactions.map(( transaction ) =>Number(transaction.amount))
    const income = amount.filter((item) => item>0)
    .reduce((acc,item) => (acc+item),0);
    const expense = amount.filter((item) => item<0)
    .reduce((acc,item) => (acc+item),0);
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>₹{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>₹{expense}</p>
        </div>
    </div>
  )
}
