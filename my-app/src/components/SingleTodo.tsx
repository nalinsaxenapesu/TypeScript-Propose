import React, { useState } from 'react'
import {Todo} from './TodoModal';
import './InputStyles.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md"


interface Props{
    todo:Todo,
    setToDoList:React.Dispatch<React.SetStateAction<Todo[]>>,
    todoList:Todo[]
}


const SingleTodo = ({todo,setToDoList,todoList}:Props) => {
    const [edit,setEdit]=useState<boolean>(false)
    const [editTodo,setEditTodo]=useState<string>(todo.todo)
    const [showCuteImage, setShowCuteImage] = useState<boolean>(false);
    const onDone=(id:number)=>{
       setToDoList(todoList.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:
        todo
       ))
       setShowCuteImage(true);
       setTimeout(() => {
         setShowCuteImage(false);
       }, 4000);
     };
    
    const onDelete=(id:number)=>{
  setToDoList(todoList.filter((todo)=>todo.id!==id))
     }
     const onEdit=()=>{
        if(!todo.isDone)
        setEdit(!edit)
     }
     const handleSubmit=(e:any,id:number)=>{
        e.preventDefault()
        setToDoList(todoList.map((todo)=>todo.id===id?{...todo,todo:editTodo}:
        todo
       ))
       setEdit(false)
     }
  return (
<form className='todos__single' onSubmit={(e)=>handleSubmit(e,todo.id)}>
{
  edit ?(
<input  value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}></input>
  ) : 
    !todo.isDone?(<span className='todos__single--text'>{todo.todo}</span>)
        :( <s className='todos__single--text'>{todo.todo}</s>)
    
  
}
{todo.isDone && showCuteImage && (
        <img src={"https://i.pinimg.com/originals/05/f5/19/05f5196bc2aaab9705154ddb05d2ef79.gif"} alt="Cute Image" style={{width:'50% ', borderRadius:'20px', margin:'20px'}} />
      )}


    <span className='icon' onClick={()=>onEdit()}><MdEdit/></span>
    <span className='icon' onClick={()=>onDelete(todo.id)}><MdDelete></MdDelete></span>
    <span className='icon' onClick={()=>onDone(todo.id)}><MdOutlineDownloadDone></MdOutlineDownloadDone></span>

</form>
  )
}

export default SingleTodo
