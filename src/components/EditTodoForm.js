import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      if (e.key=== 'Enter') {
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      }};
  return (
    <form onKeyDown={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    
  </form>
  )
}
