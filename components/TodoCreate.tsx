"use client";
import { TodoType } from "@/types/todotypes";
import { Input, Button } from "@nextui-org/react";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const TodoCreate = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  // Create New Todo
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { todoName: value, id: todos.length };
    setValue("");
    setTodos([...todos, newTodo]);
  };

  // Drag Todo
  const dragTodo = useRef<number>(0);
  const draggedOverTodo = useRef<number>(0);

  function handleSort() {
    const todoClone = [...todos];
    const temp = todoClone[dragTodo.current];
    todoClone[dragTodo.current] = todoClone[draggedOverTodo.current];
    todoClone[draggedOverTodo.current] = temp;
    setTodos(todoClone);
  }

  // Delete Todo
  const handleDelete = (id: number) => {
    console.log(id);
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div>
      <form
        className="flex w-full flex-wrap md:flex-nowrap gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          isRequired
          isClearable
          variant="underlined"
          color="primary"
          type="text"
          label="Todos"
          description="You can write in the field above"
          value={value}
          onValueChange={setValue}
        />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <motion.div
            key={todo.id}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 3px 3px rgba(148, 163, 184,0.15)",
            }}
            whileTap={{
              scale: 1.12,
              boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
            }}
            className="relative cursor-grab p-2 rounded-xl"
            draggable
            onDragStart={() => (dragTodo.current = index)}
            onDragEnter={() => (draggedOverTodo.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <li className="flex justify-between py-4 items-center">
              <span>{todo.todoName}</span>
              <Button
                size="sm"
                color="danger"
                onClick={() => handleDelete(todo.id)}
              >
                X
              </Button>
            </li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default TodoCreate;
