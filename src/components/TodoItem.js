import React from 'react';


const TodoItem = (props) => {
const {item = null, deleteItem, changeStatus} = props;
return (
    <div className={item.isCompleted?'ToDoItem a':'ToDoItem'} key={item.id}>
    <span className="TodoName" key={item.id}>{item.name}
    <input type="checkbox" value={item.isCompleted} checked={item.isCompleted}
    onChange={()=> changeStatus(item.id)}
    ></input>
    </span> 
    <button className="TodoAction" onClick={()=> deleteItem(item.id)}>-</button>
    </div>
)
}

export default TodoItem;