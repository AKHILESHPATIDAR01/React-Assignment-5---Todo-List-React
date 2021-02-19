import React, { useState } from 'react';
import '../styles/App.css'
import Form from './Form';
import FormUpdate from './FormUpdate';
import TodoMain from './TodoMain';


const Todo = () => {
    const [todoList ,setToDoList] = useState([]);
    

    const addToDoList = (item)=>{

        if(!item.text){
            alert("Black will not added");
            return;
        }

        const newItem = [...todoList,item];

        setToDoList(newItem);
        console.log(newItem);
    }

    const deleteItemFromToDo = (id)=>{
        var afterRemovItem = [...todoList].filter(list => list.id !== id)

        setToDoList(afterRemovItem);
    }

    const updateList = (id , value) =>{
        // console.log("This is id :",{id});
        if(!value.text){
            alert("Black will not added");
            return;
        }

        var gettingUpdated = [...todoList].map(item => (item.id === id ? value : item));

        setToDoList(gettingUpdated);

    }

    return (
        <div>
            <Form onSubmit={addToDoList}/>
            <TodoMain todoList={todoList} updateList={updateList} deleteItemFromToDo={deleteItemFromToDo}/>
            <FormUpdate style={{visibility: "hidden"}} className="donotshow" onSubmit={addToDoList}/>
        </div>
    );
};

export default Todo;

// import React, { Component } from 'react';
// import Form from './Form';

// cla Todo{
//     const [todoList ,setToDoList] = useStat

//     render() {
//         return (
//             <div>
//                 <Form />
//             </div>
//         );
//     }
// }

// export default Todo;