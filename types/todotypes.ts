import { Dispatch, SetStateAction } from "react";

export type TodoType = {
  todoName?: string;
  id: string | number;
};

export type TodoPropsType = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};
