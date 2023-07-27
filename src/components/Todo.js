import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
import { RxCircle } from "react-icons/rx";



export const Todo = ({id, task, deleteTodo, editTodo, toggleComplete}) => {
  
  const [isActive, setIsActive] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  
 
  return (
    <div className="Todo" 
    onMouseEnter={() => {
      setShowMessage(true);
    }}
    onMouseLeave={() => {
      setShowMessage(false);
    }} 
    onDoubleClick={() => editTodo(task.id)}>
      
      <div className='check_btn' style={{color: task.completed ? 'green' : ''}} onClick={() => {toggleComplete(task.id);}}>
        {!task.completed? <RxCircle onClick={()=>{
            setIsActive(!isActive);}}/>:
          <RxCheckCircled onClick={()=>{
            setIsActive(!isActive)}} />
        }
      </div>
      
        <p style={{alignItems: 'start'}} className={`${task.completed ? 'completed' : "default-todo"}`} >{task.task}</p>
        
        <div className='cross'> {
        showMessage &&
        <RxCross2 color='red'  onClick={() => deleteTodo(task.id)} />
        }
        
        </div>
    </div>
  )
}
