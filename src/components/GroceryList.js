import React from 'react';
import Groceries from './Groceries';

const GroceryList = ({groceryList, handleToggle, handleFilter}) => {
    return (
        <div>
            <h2>To Purchase:</h2>
            {groceryList.map(groceries => {
                if (groceries.complete == false) {
                    return (
                        <Groceries groceries={groceries} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                }
            })}
        </div>
    );
};
 
export default GroceryList;