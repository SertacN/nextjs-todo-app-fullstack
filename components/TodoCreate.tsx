"use client";
import { TodoType } from "@/types/todotypes";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
const TodoCreate = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = useState<TodoType[]>([
    {
      todoName: "sad",
      id: 4,
    },
    {
      todoName: "sertac",
      id: 5,
    },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { todoName: value, id: todos.length };
    setValue("");
    setTodos([...todos, newTodo]);
    // POST İŞLEMİ
    // const response = await axios.post("URL" , {
    //   todoName:value,
    //   id:todos.length,
    // })
    // const newTodosArray = [...todos,response.data]
    // setTodos([newTodosArray])
  };
  // GET İŞLEMİ useEffect ile
  // const fetchData = async () => {
  //   const response = await axios.get("URL");
  //   setTodos(response.data);
  // };
  // DELETE İŞLEMİ
  // const deleteTodoItem = async (id) => {
  //   await axios.delete(`URL${id}`);
  //   const newTodosArray = todos.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setTodos(newTodosArray);
  // };

  // Oluşturulan todolar backende yollanacak
  // Backendden çekilen todolar TodoList componentinde listenecek
  // POST işlemi burada
  // GET işlemi list componentinde olmalı.
  // DELETE işlemi list componentinde olmalı.
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
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between py-4 items-center">
            <span>{todo.todoName}</span>
            <Button size="sm" color="danger">
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCreate;
