import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const { dispatch, currency  } = useContext(AppContext);
    const [symbol, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    //console.log(currency)
    console.log("running Currency")
    const submitEvent = () => {
        //console.log("not submitted")
        if (symbol === "Dollar") {
            console.log("Dollar")
            console.log(currency[0])
            return;
        }
        if (symbol === "Pound") {
            console.log("Pound")
            console.log(currency[1])
            return;
        }
        if (symbol === "Euro") {
            console.log("Euro")
            console.log(currency[2])
            return;
        }
        if (symbol === "Ruppee") {
            console.log("Ruppee")
            console.log(currency[3])
            return;
        }
            /*if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            } */
        /*    
        const currency = {
            nameid: nameid,
            symbol: symbol,
        }; */
        // if(symbol === "dollar") {
            //alert("The value cannot exceed remaining funds  £"+ currency); 
            // setCost("");
        //     return;
        /*if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            } */

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
                        <option defaultValue>Choose...</option>
                        <option value="Dollar" name="Dollar"> Dollar</option>
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