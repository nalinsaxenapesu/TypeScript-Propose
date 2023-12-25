import React from 'react'
import './InputStyles.css'

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
return <form className='input' onSubmit={handleAdd}>
<input type='input' placeholder='enter item ✅' className='input__box' 
value={todo}
onChange={(e)=>setTodo(e.target.value)}></input>
<button className='input_submit' type='submit'>ADD💚</button>
</form>
}

export default InputField
