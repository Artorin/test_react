import React, { useState,useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {

  // add N elements
  let i = 0
  const todosall = []

  while (i < 1000) {
    todosall.push({id: uuidv4(), task: "todo" , completed: false, isEditing: false})
    i++;
  }


  const [todos, setTodos] = useState(todosall);
  
  useEffect(() => {
    localStorage.setItem(...todosall)
}, []);

  const [value, setValue] = React.useState(todosall.length);

  const addTodo = (todo) => {
    const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setValue(JSON.parse(localStorage.todos).length)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setValue(JSON.parse(localStorage.todos).length)} 

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
  // check
  const editTask = (task, id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  function toggleAllFunction(todo) {
   todo.completed = !todo.completed
    return todo
  }

  const toggleAll = () => {
    setTodos(
      todos.map(toggleAllFunction))
  };


  return (
    <div className="back">
      <h1 className="font-back">ToDo List</h1>
      <div className="TodoWrapper">
        <div className="etw-1">
          <button className="down" onClick={toggleAll}>❯</button>
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
