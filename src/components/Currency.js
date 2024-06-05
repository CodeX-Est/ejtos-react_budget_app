import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';
const Currency = (props) => {
    const { dispatch, currency  } = useContext(AppContext);
    const [symbol, setName] = useState('');
    const [newCurrency, setCurrency] = useState('');
    const [action, setAction] = useState('');
    //console.log(currency)
    //console.log("running Currency")
    //let newerCurrency = currency[0]
    const submitEvent = (event) => {
        //console.log("not submitted")
        //console.log(currency)
        //console.log(symbol)
        console.log(event.target.value)
        if (event.target.value === "Dollar") {
            //console.log("Dollar");
            const newerCurrency  = "$"
            //console.log(newerCurrency);
            // budget = newBudget;
            //setName(event.target.value);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newerCurrency,
            });
            return;
        }
        if (event.target.value === "Pound") {
            //console.log("Pound")
            const newerCurrency  = "£"
            //console.log(newerCurrency);
            //setName(event.target.value);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newerCurrency,
            });
            return;
        }
        if (event.target.value === "Euro") {
            //console.log("Euro")
            const newerCurrency  = "€";
            //console.log(newerCurrency);
            //setName(event.target.value);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newerCurrency,
            });
            return;
        }
        if (event.target.value === "Ruppee") {
            //console.log("Ruppee")
            const newerCurrency  = "₹";
            //console.log(newerCurrency);
            //setName(event.target.value);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newerCurrency,
            });
            return;
        }
    };
    // submitEvent()
    return (
        <div className='container'>
            <select className="currency-item" id="inputGroupSelect02" onChange={submitEvent}>
                <option value="Dollar" name="Dollar">$ Dollar</option>
                <option value="Pound" name="Pound">£ Pound</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;