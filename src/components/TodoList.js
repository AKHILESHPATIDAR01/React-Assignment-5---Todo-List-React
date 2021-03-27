import React from 'react'
import EditTask from './EditTask';
import './editTask.css';

function TodoList({todoList,setTodoList}) {
    return (
        <div className="container">
            <h1>ToDo List</h1>
            <ul>
                {todoList.map((item, index) => { 
                return (
                    <li key={index} className="list">
                    {
                        <EditTask
                        listItem={item}
                        index={index}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        />
                    }
                    </li>
                );
                })}
            </ul>
        </div>
    );
}

export default TodoList
