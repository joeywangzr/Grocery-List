import React from 'react';
import Groceries from './Groceries';
import sort from '../images/sort-solid.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PriorityList.css';

const PriorityList = ({groceryList, handleToggle, handleFilter, handlePrio, handleSort, isSorted}) => {
    const handleSortClick = () => {
        handleSort()
    }

    const alphabeticize = (groceryList) => {
        // call function on every element in array
        let sorted = [...groceryList];
        sorted.sort((a,b) => a.task > b.task ? 1 : -1,);
        return sorted;
    };
    
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col purchase-text">
                        <h3>To Purchase:</h3>
                    </div>
                    <div class="sort-button-holder sort-button">
                        <img 
                            className="sort"
                            src={sort} 
                            height="24px"
                            onClick={handleSortClick}
                        />
                    </div>
                </div>
            </div>
                {(isSorted ? alphabeticize(groceryList) : groceryList).map(groceries => {
                    if ((groceries.complete == false) && (groceries.priority == true))  {
                        return (
                            <Groceries groceries={groceries} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio}/>
                        )
                    }
                })}
        </div>
    );
};
 
export default PriorityList;