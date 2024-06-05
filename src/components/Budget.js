import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currencyValue } = useContext(AppContext);
    let { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    //console.log(currencyValue)
    /*if (budget >= 20000) {
        alert("The value cannot exceed 20000.");

    } */
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        // budget = newBudget;
        //let currency_value = currency.symbol
        budget = newBudget;
        //console.log(budget);
        if (budget >= 20000) {
            alert("The value cannot exceed 20000.");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
        budget = newBudget;
        //console.log(budget);
        if (budget >= 20000) {
            alert("The value cannot exceed 20000.");

        }
    }
    // budget = newBudget
    //console.log(budget);
    return (
<div className='alert alert-secondary'>
<span>Budget: {currencyValue}</span> 
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
