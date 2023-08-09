import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      if (e.key=== 'Enter') {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      }
      };

  return (
    <div className='btn-input'>
      <form 
        onKeyDown={handleSubmit}
        className="TodoForm">
          <input type="text" 
          placeholder='What needs to be done?'
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          className="todo-input" 
          />
      </form>
    </div>
  )
}
