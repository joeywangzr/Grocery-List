import React from 'react';
import Groceries from './Groceries';
import './CompletedList.css';

const CompletedList = ({groceryList, handleToggle, handleFilter, handlePrio}) => {
    return (
        <div>
            <h3>Purchased:</h3>
            {groceryList.map(groceries => {
                if (groceries.complete === true) {
                    return (
                        <Groceries groceries={groceries} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio}/>
                    )
                }
            })}
        </div>
    );
};
 
export default CompletedList;