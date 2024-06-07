import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = () => {
        return expenses.reduce((total, item) => total + item.cost, 0);
    }
    const handleBudgetChange = (event) => {
        
        if(event.target.value < totalExpenses) {
            alert(`You cannot reduce the budget value below the spending of ${currency}${totalExpenses}`);
            setNewBudget(budget);
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }
    }
   
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                className="custom-select"
                type="number"
                step="10"
                style={{width: "200px"}}  
                value={newBudget}
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};
export default Budget;
