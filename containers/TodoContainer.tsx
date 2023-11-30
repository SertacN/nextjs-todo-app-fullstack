"use client";
import { TodoType } from "@/types/todotypes";
import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/app/firebase";

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    onSnapshot(q, (querySnapshot) => {
      let itemsArr: TodoType[] = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(itemsArr);
    });
  }, []);

  return (
    <>
      <TodoCreate todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoContainer;
