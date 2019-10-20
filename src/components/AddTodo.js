import React, {useState, useContext} from 'react';
import CountContext from './reducers/Context';

const useTodo = () => {
    const contextValue = useContext(CountContext);
    return contextValue;
  };
const AddTodo = (props)=>{
    const [,dispatch] = useTodo();
    const [toDo,setTodo] = useState('');
    
    const handleInput = (e)=> {
        setTodo(e.target.value)
    }
    const handleKeyPress = (e) => {
        if(e.key ==="Enter"){
            createNewToDoItem(e.target.value)
        }
    }
    const createNewToDoItem = (toDo)=> {
        toDo && dispatch({type:'add', payload:toDo})
        setTodo('');
    }
    return (
        <div  className="ToDoItem">
        <input className="TodoInput" type="text" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
        <button className="TodoActionAdd" onClick={() => {createNewToDoItem(toDo); }}>
          +
        </button>
        </div>
    );
}

export default AddTodo;