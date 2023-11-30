import { TodoPropsType } from "@/types/todotypes";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { Badge } from "@nextui-org/badge";
import { ClipboardIcon } from "@heroicons/react/20/solid";

export default function TodoCreate({ todos, setTodos }: TodoPropsType) {
  const [value, setValue] = React.useState("");

  // Create Todo
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let counter = 0;
    const newTodo = { todoName: value, id: counter++ };
    setValue("");
    setTodos([...todos, newTodo]);
    // Add todo to database
    await addDoc(collection(db, "todos"), {
      todoName: newTodo.todoName,
    });
  };

  return (
    <>
      <Badge content={todos.length} shape="circle" color="danger">
        <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
        >
          <ClipboardIcon />
        </Button>
      </Badge>
      <form
        className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4"
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
    </>
  );
}
