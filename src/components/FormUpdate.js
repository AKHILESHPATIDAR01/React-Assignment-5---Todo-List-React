import React, { useState } from 'react';

const FormUpdate = (props) => {

    const [inputText, setInputText] = useState('');
    //  const [counter , setCounter] = useState(0);

    const handleChange = (event) =>{
        setInputText(event.target.value);
        console.log(inputText);
    }

    const handleOnSubmit =(e)=>{
        e.preventDefault();

        // props.onSubmit(inputText);


        props.onSubmit({
            // id: counter,
            text : inputText,
        });

        // setCounter(counter + 1);

        setInputText('');
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <textarea className="editTask" id="task" value={inputText} onChange={handleChange} name='text'/>
                <button className="saveTask" id="btn" onClick={handleOnSubmit} >Save</button>
            </form>
        </div>
    );
};

export default FormUpdate;