import React from 'react';
import Groceries from './Groceries';

const PriorityList = ({groceryList, handleToggle, handleFilter, handlePrio}) => {
    return (
        <div>
            <h3>To Purchase:</h3>
            {groceryList.map(groceries => {
                if  ((groceries.complete == false) && (groceries.priority == true))  {
                    return (
                        <Groceries groceries={groceries} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio}/>
                    )
                }
            })}
        </div>
    );
};
 
export default PriorityList;