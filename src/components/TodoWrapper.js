import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { RxChevronDown } from "react-icons/rx";

export const TodoWrapper = () => {


  // add 1000 elements
  let i = 0
  const todosall = []

  while (i < 1000) {
    todosall.push({id: uuidv4(), task: "todo" , completed: false, isEditing: false})
    i++;
  }


  const [todos, setTodos] = useState(todosall);

  const [value, setValue] = React.useState(todosall.length);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    setValue(todosall.length)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setValue(todosall.length)} 

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  function myFunction(todo) {
    if (todo.completed === true) {
      todo.completed = false;
    }
    if (todo.completed === false) {
      todo.completed = true;
    }
    
    return todo
  }

  const toggleAll = () => {
    setTodos(
      todos.map(myFunction))
  };



  return (
    <div className="back">
      <h1 className="font-back">ToDo List</h1>
      <div className="TodoWrapper">
        <div className="etw-1">

          <RxChevronDown className='btn-down'
            onClick={toggleAll}
          />

          <TodoForm addTodo={addTodo} />
        </div>
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}

      </div>
      <p style={{alignItems: 'start'}} className="number-of-elements" >{value} item(s) left</p>
    </div>
  );
};
