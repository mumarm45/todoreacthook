import React, {useReducer} from 'react';
import './App.css';
import reducer from './components/reducers/TodoReducer';
import Todo from './components/Todo';
import CountContext from './components/reducers/Context'
function init(){
  return {list: [
      {id:1, name: 'Omar', isCompleted:false},
      {id:2, name: 'Omar 2', isCompleted:true}
  ]};
}




function App() {
  const contextValue = useReducer(reducer, init());
  return (
    <CountContext.Provider value={contextValue}>
     <Todo/>
    </CountContext.Provider>
  );
}

export default App;
