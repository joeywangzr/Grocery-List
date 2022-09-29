import React from 'react';
import Groceries from './Groceries';

const GroceryList = ({groceryList, handleToggle, handleFilter, handlePrio, isSorted}) => {
    const alphabeticize = (groceryList) => {
        // call function on every element in array
        let sorted = [...groceryList];
        sorted.sort((a,b) => a.task > b.task ? 1 : -1,);
        return sorted;
    };
    
    return (
        <div>
            {(isSorted ? alphabeticize(groceryList) : groceryList).map(groceries => {
                if ((groceries.complete == false) && (groceries.priority == false)) {
                    return (
                        <Groceries groceries={groceries} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio}/>
                    )
                }
            })}
        </div>
    );
};

export default GroceryList;