import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const { dispatch, currency  } = useContext(AppContext);
    const [symbol, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    /* dispatch({
        type: 'CHG_CURRENCY',
        payload: currency, 
    }); */
    const submitEvent = () => {
            /*if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            } */
        const currency = {
            nameid: nameid,
            symbol: symbol,
        };
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