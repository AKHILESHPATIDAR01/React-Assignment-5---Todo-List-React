import React, {useState} from 'react'
import './newTask.css';

function NewTask({todoList,setTodoList}) {
    const handleAddTask=()=>{
        !(newTask.replace(/\s/g,'')  =="") && setTodoList([...todoList,newTask]);
        setNewTask("");
    }
    
    const [newTask, setNewTask] = useState("");
     
    const handleOnChange=(event)=>{
        setNewTask(event.target.value); 
    }  
      
    
    return (
        <div className="newTask">
            <textarea id="task" value={newTask} onChange={handleOnChange} ></textarea>
            <br/>
            <button id="btn" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default NewTask
