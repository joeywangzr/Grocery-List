import React from 'react';
import Groceries from './Groceries';

const GroceryList = ({groceryList, handleToggle, handleFilter, handlePrio}) => {
    return (
        <div>
            {groceryList.map(groceries => {
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