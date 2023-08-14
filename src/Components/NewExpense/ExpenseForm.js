import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredtitle, setNewTitle] = useState('')
    const [enteredAmount, setNewAmount] = useState('')
    const [enteredDate, setNewDate] = useState('')

    const titleChanged = (event) => {
        setNewTitle(event.target.value)
    }


    const amountChanged = (event) => {
        setNewAmount(event.target.value)
    }


    const dateChanged = (event) => {
        setNewDate(event.target.value)
    }
    const FormData = (event) => {
        event.preventDefault();
        const ExpenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(ExpenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    };



    return (

        <form onSubmit={FormData}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Expense title</label>
                    <input type="text" value={enteredtitle} onChange={titleChanged} />
                </div>

                <div className="new-expense__controls">
                    <label>Expense Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChanged} />
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChanged} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>

        </form>

    )

}
export default ExpenseForm;