"use client";
import { Input } from "@nextui-org/react";
import React from "react";

const TodoCreate = () => {
  const [todo, setTodo] = React.useState("");

  return (
    <form className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        isRequired
        isClearable
        variant="underlined"
        color="primary"
        type="text"
        label="Todos"
        description="You can write in the field above"
        value={todo}
        onValueChange={setTodo}
      />
    </form>
  );
};

export default TodoCreate;
