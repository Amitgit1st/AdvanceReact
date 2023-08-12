import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    
    const titleChanged = (event) => {
       console.log(event.target.value)
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
                    <input type="number" />
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
       
    )

}
export default ExpenseForm;