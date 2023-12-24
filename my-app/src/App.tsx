import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import {Todo} from './components/TodoModal';
import TodoList from './components/TodoList';


const App:React.FC=()=> {

  const [todo,setTodo]=useState<string>("")
  const [todoList,setToDoList]=useState<Todo[]>([])
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setToDoList([...todoList,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
     }}


  return (
    <div className="App">
      <div className='heading'>🤓My babe's Todo List🤓</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList todoList={todoList} setToDoList={setToDoList}></TodoList>
    </div>
  );
}

export default App;
