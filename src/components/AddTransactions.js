import React, { useState } from 'react'
import { addTransaction } from '../redux/action'

export default function AddTransactions({id, addTransaction}) {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (event) =>{
        event.preventDefault()
        const newTransactions = {
            id:id,
            text: text,
            amount: amount,
            date: date
        }
        addTransaction(newTransactions)
        setText("")
        setAmount(0)
        setDate("")
        // console.log(newTransactions)
    }
    return (
    <div>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Text</label>
                <input value={text} onChange={(event) => setText(event.target.value)} placeholder = "Enter text..." type ="text"/>
            </div>
            <div className='form-control'>
                <label>Amount</label>
                <input value={amount} onChange={(event)=> setAmount(event.target.value)} placeholder = "Enter amount..." type ="number"/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input value={date} onChange={(event)=> setDate(event.target.value)} placeholder = "Enter date..." type ="Date"/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}
