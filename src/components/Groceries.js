import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Groceries = ({groceries, handleToggle, handleFilter}) => {
    const handleDoneClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    
    const handleRemoveClick = (e) => {
        e.preventDefault()
        handleFilter(e.currentTarget.id)
    }

    return (
        <Card>
            <Card.Body>
                <div id={groceries.id} key={groceries.id + groceries.task} name="groceries" value={groceries.id} className={groceries.complete ? "noselect groceries completed" : "groceries"}>
                    <Button variant="outline-success" id={groceries.id} key={groceries.id + groceries.task} name="groceries" value={groceries.id} onClick={handleDoneClick}>✓</Button>{' '}
                    <Button variant="outline-danger" id={groceries.id} key={groceries.id + groceries.task} name="groceries" value={groceries.id} onClick={handleRemoveClick}>✕</Button>
                    {groceries.task}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Groceries;