import React from 'react'

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

    <input type="checkbox" className='checkbox-style'  checked={task.completed ? "checked": "" }  onClick={() => {toggleComplete(task.id);}} />
      
      
      
        <p style={{alignItems: 'start'}} className={`${task.completed ? 'completed' : "default-todo"}`} >{task.task}</p>
        
        <div className='cross'> {
        showMessage &&
        <button color='red' className='cross-btn'  onClick={() => deleteTodo(task.id)}>x</button>
        }
        
        </div>
    </div>
  )
}