import React, { useState,useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {

  // Generate an initial array of todos
  let i = 0
  const todosall = []
  while (i < 10) {
    todosall.push({id: uuidv4(), task: "todo" , completed: false, isEditing: false})
    i++;
  }

  // State to manage the todo list
  const [todos, setTodos] = useState(todosall);
  
  // Load todos from local storage on component mount on init render
  useEffect(() => {
    localStorage.setItem(...todosall)
}, []);

  // State to track the number of items left
  const [value, setValue] = React.useState(todosall.length);

  // Function to add a new todo
  const addTodo = (todo) => {
    const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setValue(JSON.parse(localStorage.todos).length)
  }

  // Function to delete a todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setValue(JSON.parse(localStorage.todos).length)} 

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Function to toggle the editing status of a todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  
  // Function to edit the task of a todo
  const editTask = (task, id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Function to toggle the completion status of all todos
  function toggleAllFunction(todo) {
   todo.completed = !todo.completed
    return todo
  }

  // Function to map todos to toggleAllFunction
  const toggleAll = () => {
    setTodos(
      todos.map(toggleAllFunction))
  };

  // Render the TodoWrapper component
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
