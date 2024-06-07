import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const options = [
        {label: '$ Dollar', value: '$'},
        {label: '£ Pound', value: '£'},
        {label: '€ Euro', value: '€'},
        {label: '₹ Rupee', value: '₹'},
    ];

    const { currency, dispatch } = useContext(AppContext);
    const [ newCurrencyValue, setCurrencyValue ] = useState(currency);

    const handleCurrencyChange = (event) => {
        setCurrencyValue(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    };

    return (
        <div className='alert alert-success'>
            <span>Currency</span>
            <select 
                style={{width: "2000px;", backgroundColor: "transparent", border: "none"}} 
                className="custom-select" 
                value={newCurrencyValue} 
                onChange={handleCurrencyChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))};
            </select>
        </div>
    );
};

export default ChangeCurrency;