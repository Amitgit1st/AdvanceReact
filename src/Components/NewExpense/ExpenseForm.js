import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredtitle ,setNewTitle]=useState('')
    // const titleChanged = (event) => {
    //     setNewTitle(event.target.value)
    // }

    // const [ enteredAmount,setNewAmount]=useState('')
    // const amountChanged= (event) => {
    //     setNewAmount(event.target.value)
    // }

    // const [enteredDate,setNewDate]=useState('')
    // const dateChanged= (event) => {
    //     setNewDate(event.target.value)
    // }

    const [userInput, setUserInput] = useState({
        enteredtitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChanged = (event) => {
        setUserInput({
            ...userInput,
            enteredtitle: event.target.value,
        })
    }
    const amountChanged = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    }
    const dateChanged = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    }


    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Expense title</label>
                    <input type="text" onChange={titleChanged} />
                </div>

                <div className="new-expense__controls">
                    <label>Expense Amount</label>
                    <input type="number" onChange={amountChanged} />
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" onChange={dateChanged} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>

    )

}
export default ExpenseForm;