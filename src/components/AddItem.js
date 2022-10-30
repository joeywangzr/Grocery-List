import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddItem.css';

const AddTask = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');
    const [ inputLength, setInputLength ] = useState(0);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim().length !== 0) {
            addTask(userInput);
            setUserInput("");
        }
    }

    return (
        <div className="input-holder">
            <form onSubmit={handleSubmit}>
                <input maxLength="50" value={userInput} type="text" onChange={handleChange} placeholder="Add item..."/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddTask;