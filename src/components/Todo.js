import React, {useContext} from 'react';
import Logo from '../logo.svg';
import './Todo.css';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import ListContext from './reducers/Context'

const useTodo = () => {
  const contextValue = useContext(ListContext);
  return contextValue;
};


function Todo() {
    const [state, dispatch] = useTodo();
    const deleteItem  = (id)=>{
      dispatch({type:'delete', payload: id})
    };

    const changeStatus  = (id)=>{
      dispatch({type:'changeStatus', payload: id})
    };
  return (
    <div>
    <img className="App-logo" src={Logo} alt="React logo" />
    <h1 className="ToDo-Header">React To Do</h1>
    <AddTodo ></AddTodo>
    {
      state.list.map(todo=> {
          return  <TodoItem key={todo.id} item={todo} deleteItem={deleteItem} changeStatus={changeStatus}></TodoItem>
        })
    }
   
    </div>
  );
}

export default Todo;