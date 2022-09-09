import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddItem.css';

const AddTask = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
            <div class="add-items container">
                <div class="row justify-content-md-center">
                    <div class="col">
                        <form onSubmit={handleSubmit}>
                            <input value={userInput} type="text" onChange={handleChange} placeholder="Add item..."/>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default AddTask;