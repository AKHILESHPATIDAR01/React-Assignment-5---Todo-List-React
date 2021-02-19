import React, { useState } from 'react';
// import Form from './Form';
import FormUpdate from './FormUpdate';

const TodoMain = (  {todoList ,updateList,  deleteItemFromToDo} ) => {
    // console.log("HEllo Moto");
    const [edit , setEdit] = useState({
        id: null,
        value: '',
    })
    

    const update = value =>{
        updateList(edit.id , value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if(edit.id) {
        console.log("if is called")
        return <FormUpdate edit={edit} onSubmit={update}/>;
    }

    return (todoList.map((list , index) =>{
            return(
            <div key={index}>
                <div className="list" key={list.id}>{list.text}</div>
                <button className="edit" onClick={ ()=> setEdit({ id: list.id, value: todoList.text })}>Edit</button>
                <button className="delete" onClick={()=>{deleteItemFromToDo(list.id)}}>Delete</button>
            </div>
            );
        })
    );
    
};

export default TodoMain;