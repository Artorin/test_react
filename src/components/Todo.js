import React from 'react'

import { RxCross2, RxPinLeft } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
import { RxCircle } from "react-icons/rx";




export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  
  const [isGreen, setIsGreen] = React.useState(false)
  const [isActive, setIsActive] = React.useState(false);
  
 
  return (
    <div className="Todo" onDoubleClick={() => editTodo(task.id)}  >
      
      <div className='check_btn' style={{color: isGreen ? 'green' : ''}} onClick={() => {toggleComplete(task.id);}}>
        {!isActive? <RxCircle onClick={()=>{
            setIsActive(!isActive);}}/>:
          <RxCheckCircled onClick={()=>{
            setIsActive(!isActive)}} />
        }
      </div>
      
        <p style={{alignItems: 'start'}} className={`${task.completed ? 'completed' : ""}`} >{task.task}</p>
        
        <div>
        <RxCross2 color='red' onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
