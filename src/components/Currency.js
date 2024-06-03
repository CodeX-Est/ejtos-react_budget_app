import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const { dispatch, currency  } = useContext(AppContext);
    const [symbol, setName] = useState('');
    const [newCurrency, setCurrency] = useState('');
    const [action, setAction] = useState('');
    //console.log(currency)
    console.log("running Currency")
    const submitEvent = (event) => {
        //console.log("not submitted")
        if (symbol === "Dollar") {
            console.log("Dollar");
            const newerCurrency  = currency[0];
            console.log(newerCurrency);
            /* budget = newBudget;
            //setCurrency(newerCurrency);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newerCurrency,
            }); */
            return;
        }
        if (symbol === "Pound") {
            console.log("Pound")
            const newerCurrency  = currency[1];
            console.log(newerCurrency);
            return;
        }
        if (symbol === "Euro") {
            console.log("Euro")
            const newerCurrency  = currency[2];
            console.log(newerCurrency);
            return;
        }
        if (symbol === "Ruppee") {
            console.log("Ruppee")
            const newerCurrency  = currency[3];
            console.log(newerCurrency);
            return;
        }
    };
    submitEvent()
    return (
        <div>
            <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue="Dollar" name="Dollar">Dollar</option>
                        <option value="Pound" name="Pound">Pound</option>
                        <option value="Euro" name="Euro">Euro</option>
                        <option value="Ruppee" name="Ruppee">Ruppee</option>
                  </select>
                </div>
                </div>
        </div>
    );
};
export default Currency;