import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { RxChevronDown } from "react-icons/rx";

export const TodoWrapper = () => {

  const [isActive, setIsActive] = React.useState(false);


  // add 1000 elements
  let i = 0
  const todosall = []

  while (i < 1000) {
    todosall.push({id: uuidv4(), task: "todo" , completed: false, isEditing: false})
    i++;
  }


  const [todos, setTodos] = useState(todosall);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

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
    return todo.completed = !todo.completed;
  }

  const toggleAll = () => {
    setTodos(
      todos.map(myFunction)
    )
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
    </div>
  );
};
