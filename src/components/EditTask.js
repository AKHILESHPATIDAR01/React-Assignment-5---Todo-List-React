import React, { useEffect, useState } from 'react'

const EditTask = ({listItem,index,todoList,setTodoList}) => {
  
    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState(listItem);
    const handleEdit = () => {
        setIsEditing(true);
    };
    const saveButton = React.createRef();

    const handleDelete = () => {
        let clonedArr = [...todoList];
        clonedArr.splice(index, 1);
        setTodoList(clonedArr);
    };

    const changeText = (event) => {
        setCurrentText(event.target.value);
    };

    const handleSave = () => {
        // console.log(currentText.replace(/\s/g,''));
        if (currentText.replace(/\s/g, "") !== "") {
        let clonedArr = [...todoList];
        clonedArr[index] = currentText;
        setTodoList(clonedArr);
        setIsEditing(false);
        }
    };

    useEffect(() => {
        if (saveButton.current !== null) {
        if (currentText.replace(/\s/g, "") == "") {
            saveButton.current.disabled = true;
        } else {
            saveButton.current.disabled = false;
        }
        }
    }, [currentText]);

  if (isEditing) {
    return (
      <div className="added-task">
        <textarea
          className="editTask"
          onChange={changeText}
          defaultValue={listItem}
        ></textarea>
        <br />
        <button className="saveTask" onClick={handleSave} ref={saveButton}>
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="added-task">
        <div className="todo-items">{listItem}</div>
        <div className="buttons">
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default EditTask
