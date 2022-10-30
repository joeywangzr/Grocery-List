import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Groceries.css'
import taskButton from '../images/circle.svg';
import checkMark from '../images/checkmark.svg';
import important from '../images/important.svg';
import plus from '../images/plus.svg';
import me from '../images/trash.svg';

const Groceries = ({groceries, handleToggle, handleFilter, handlePrio}) => {    

    const [buttonHover, setButtonHover] = useState(false);
    
    function getTextWidth(text, font) {
        // if given, use cached canvas for better performance
        // else, create new canvas
        var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    };

    function cropToFit(text) {
        while (getTextWidth(text+'...', "20px Segoe UI") > 296) {
            text = text.slice(0, -1);
        }
        return text + '...';
    }

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
        <div className="container">
            <div className={groceries.priority ? "row justify-content-md-center tasks priority" : groceries.complete ? "row justify-content-md-center tasks completed-boxes" : "row justify-content-md-center tasks" }>
                <div className="button-holder">
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
                        alt="complete"
                    />
                </div>
                <div className="col text">
                    <div id={groceries.id} key={groceries.id + groceries.task} name="groceries" value={groceries.id} className={groceries.complete ? "completed groceries" : "groceries"}>    
                        {getTextWidth(groceries.task, "20px Segoe UI") > 296 ? cropToFit(groceries.task) : groceries.task}
                    </div>
                    <div className="wanted">
                        Wanted by: {groceries.users.join(", ")}
                    </div>
                    <div class="wanted">
                        Wanted by: {groceries.users.join(", ")}
                    </div>
                </div>
                <div className="right-buttons row">
                    <div className="button-holder col-sm">
                        <img
                            className={"task-button"}
                            id={groceries.id} 
                            key={groceries.id + groceries.task} 
                            name="groceries" 
                            value={groceries.id} 
                            onClick={handleRemoveClick}
                            src={me}
                            height="25"
                            alt="remove"
                        />
                    </div>
                    <div className="button-holder col-sm center">
                        <img
                            className={"task-button"}
                            id={groceries.id} 
                            key={groceries.id + groceries.task} 
                            name="groceries" 
                            value={groceries.id} 
                            onClick={handlePrioClick}
                            src={important}
                            height="25"
                            alt="priority"
                        />
                    </div>
                    <div className="button-holder col-sm">
                        <img
                            className={"task-button"}
                            id={groceries.id} 
                            key={groceries.id + groceries.task} 
                            name="groceries" 
                            value={groceries.id} 
                            onClick={handlePrioClick}
                            src={plus}
                            height="25"
                            alt="join"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groceries;