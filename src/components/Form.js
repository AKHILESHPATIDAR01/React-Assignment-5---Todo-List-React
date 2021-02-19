import React, { useState } from 'react';

const Form = (props) => {

    const [inputText, setInputText] = useState('');
    const [counter , setCounter] = useState(0);

    const handleChange = (event) =>{
        setInputText(event.target.value);
    }

    const handleOnSubmit =(e)=>{
        e.preventDefault();

        // props.onSubmit(inputText);


        props.onSubmit({
            id: counter,
            text : inputText,
        });

        setCounter(counter + 1);

        setInputText('');
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <textarea id="task" value={inputText} onChange={handleChange} name='text'/>
                <button id="btn" onClick={handleOnSubmit} >Add</button>
            </form>
        </div>
    );
};

export default Form;