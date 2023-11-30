import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { TodoPropsType } from "@/types/todotypes";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export default function TodoList({ todos, setTodos }: TodoPropsType) {
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
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
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
              onClick={() => deleteTodo(todo.id.toString())}
            >
              X
            </Button>
          </li>
        </motion.div>
      ))}
    </ul>
  );
}
