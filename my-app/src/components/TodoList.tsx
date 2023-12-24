import React from 'react'
import {Todo} from './TodoModal';
import './InputStyles.css'
import SingleTodo from './SingleTodo';

interface Props{
    todoList:Todo[],
    setToDoList:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todoList,setToDoList}:Props) => {
  return (
    <div className='todos'>
      {todoList.map(todo=>(
   <SingleTodo todo={todo} todoList={todoList} setToDoList={setToDoList} />
      ))}
    </div>
  )
}

export default TodoList
