import React, {useState} from 'react'
import { RxChevronDown } from "react-icons/rx";



export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [isActive, setIsActive] = React.useState(false);

    const handleSubmit = (e) => {
      if (e.key=== 'Enter') {
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      }
      // prevent default action
       
      };
  return (
    <div className='btn-input'>
        
      <form 
        onKeyDown={handleSubmit}
        className="TodoForm">
          <RxChevronDown className='btn-down' onClick={()=>{
            setIsActive(!isActive);}}/>
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
