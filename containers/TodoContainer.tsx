"use client";
import { TodoType } from "@/types/todotypes";
import React, { useState } from "react";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <>
      <TodoCreate todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoContainer;
