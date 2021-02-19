import React, { useState } from "react";
import "./../styles/App.css";
// import Form from './Form';
import Todo from "./Todo";

function App() {

	const [todoList , updateTodoList]= useState([]);
	const [newElement , updateNewElement] = useState("");

	const handleclick = ()=>{
		// alert("Added");
	}

	return (
		<div id="main">
			<Todo />

		</div>
	);
}


export default App;
