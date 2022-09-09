import React, {useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Groceries.css'
import taskButton from '../images/circle.svg';
import checkMark from '../images/checkmark.svg';
import important from '../images/important.svg';
import me from '../images/trash.svg';

const Groceries = ({groceries, handleToggle, handleFilter, handlePrio}) => {    
    const [buttonHover, setButtonHover] = useState(false);
    
    const handleDoneClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    
    const handleRemoveClick = (e) => {
        e.preventDefault()
        handleFilter(e.currentTarget.id)
    }

    const handlePrioClick = (e) => {
        e.preventDefault()
        handlePrio(e.currentTarget.id)
    }

    return (
        <div class="container">
            <div className={groceries.priority ? "row justify-content-md-center tasks priority" : "row justify-content-md-center tasks"}>
                <div class="button-holder">
                    <img 
                        className={"task-button"} 
                        id={groceries.id} 
                        key={groceries.id + groceries.task} 
                        name="groceries" value={groceries.id} 
                        onClick={handleDoneClick} 
                        onMouseOver={() => setButtonHover(buttonHover => !buttonHover)}
                        onMouseOut={() => setButtonHover(buttonHover => !buttonHover)}
                        src={groceries.complete ? checkMark : buttonHover ? checkMark : taskButton} 
                        width="25"
                    />
                </div>
                <div class="col text text-center">
                    <div id={groceries.id} key={groceries.id + groceries.task} name="groceries" value={groceries.id} className={groceries.complete ? "completed groceries" : "groceries"}>    
                        {groceries.task}
                    </div>
                </div>
                <div class="button-holder">
                    <img
                        className={"task-button"}
                        id={groceries.id} 
                        key={groceries.id + groceries.task} 
                        name="groceries" 
                        value={groceries.id} 
                        onClick={handleRemoveClick}
                        src={me}
                        height="25"
                    />
                </div>
                <div class="button-holder">
                    <img
                        className={"button2 task-button"}
                        id={groceries.id} 
                        key={groceries.id + groceries.task} 
                        name="groceries" 
                        value={groceries.id} 
                        onClick={handlePrioClick}
                        src={important}
                        height="25"
                    />
                </div>
            </div>
        </div>
    )
}

export default Groceries;