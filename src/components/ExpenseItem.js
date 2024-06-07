import React, { useContext } from 'react';
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency   } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FaPlusCircle 
                    size='1.5em' 
                    cursor="pointer" 
                    onClick={event => increaseAllocation(props.name)} 
                    onMouseOut={({ target }) =>(target.style.color = 'black')} 
                    onMouseOver={({ target }) =>(target.style.color = 'lightgreen')}>
                </FaPlusCircle>
            </td>
            <td>
                <FaMinusCircle 
                    size='1.5em'
                    cursor="pointer"
                    onClick={event => decreaseAllocation(props.name)}
                    onMouseOut={({ target }) =>(target.style.color = 'black')} 
                    onMouseOver={({ target }) =>(target.style.color = 'orange')}>
                </FaMinusCircle>
            </td>
            <td>
                <MdDelete 
                    size='1.5em' 
                    cursor="pointer" 
                    onClick={event => handleDeleteExpense(props.name)}
                    onMouseOut={({ target }) =>(target.style.color = 'black')} 
                    onMouseOver={({ target }) =>(target.style.color = 'red')}>
                </MdDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
