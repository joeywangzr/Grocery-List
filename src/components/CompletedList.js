import React from 'react';
import Groceries from './Groceries';

const CompletedList = ({groceryList, handleToggle, handleFilter}) => {
    return (
        <div>
            <h2>Purchased:</h2>
            {groceryList.map(groceries => {
                if (groceries.complete === true) {
                    return (
                        <Groceries groceries={groceries} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                }
            })}
        </div>
    );
};
 
export default CompletedList;