import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { currencyValue } = useContext(AppContext);
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    //console.log("remaining update" + budget);
    const alertType = totalExpenses > budget ? alert("You cannot reduce the budget value lower than the spending.") : 'alert-success';
    //let { remaining } = budget - totalExpenses;
    // if (budget < remaining) {
    //    alert("The testvalue cannot exceed remaining funds  £"+budget);
        //setCost("");
    //    return;
    //}
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: { currencyValue }{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
