import { TodoPropsType } from "@/types/todotypes";
import { Input } from "@nextui-org/react";
import React from "react";

export default function TodoCreate({ todos, setTodos }: TodoPropsType) {
  const [value, setValue] = React.useState("");

  // Create Todo
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { todoName: value, id: todos.length };
    setValue("");
    setTodos([...todos, newTodo]);
  };
  return (
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
  );
}
