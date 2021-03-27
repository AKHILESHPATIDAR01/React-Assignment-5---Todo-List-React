import React , {useState} from "react";
import "./../styles/App.css";
import NewTask from "./NewTask";
import TodoList from "./TodoList";


function App() 
{
	const [todoList, setTodoList] = useState([]);
	return (
		<div id="main"> 
			<NewTask todoList={todoList} setTodoList={setTodoList} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
}


export default App;
