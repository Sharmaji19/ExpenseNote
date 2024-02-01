import React from 'react'

export default function Balance({ transactions }) {
  // console.log(transactions)
  const amount = transactions.map(( transaction ) =>Number(transaction.amount))
  const total=amount.reduce((acc, item) =>(acc + item),0)
  return (
    <div>
      <h2>Monthly Expenses</h2>
      <h3>Balance</h3>
      <h1>₹{ total }</h1>
    </div>
  )
}
