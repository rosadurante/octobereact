import { useState } from "react";
import { Button, IconButton } from "../components/button"
import { cn } from "../utils"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCheck, Edit, X } from "lucide-react"

export type todoItem = {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<todoItem[]>([
    { id: 1, title: "First task", completed: false },
    { id: 2, title: "Second task", completed: false },
    { id: 3, title: "Third task", completed: true },
    { id: 4, title: "Fourth task", completed: false },
  ]);
  const [title, setTitle] = useState<string>("");
  const [editingTodo, setEditingTodo] = useState<number | null>(null);

  const _validateTitle = (title: string) => {
    return title.trim() !== "";
  }

  const _addTodo = () => {
    if (!_validateTitle(title)) return;
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    setTitle("");
  }

  const _editTodo = (id: number) => {
    setEditingTodo(id);
    setTitle(todos.find((todo) => todo.id === id)?.title || "");
    // setTodos(todos.map((todo) => todo.id === id ? { ...todo, title: title } : todo));
  }

  const _saveTodo = () => {
    setTodos(todos.map((todo) => todo.id === editingTodo ? { ...todo, title: title } : todo));
    setEditingTodo(null);
    setTitle("");
  }

  const _deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const _toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  const _renderTodo = (todo: todoItem) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-2 text-left items-start"
        key={todo.id}
      >
        <div className={cn("flex-1 rounded-md py-1 px-2 bg-[#ddd] transition-all duration-500", todo.completed && "bg-[#f9f9f9]")}>
          <p>{todo.title}</p>
        </div>
        <IconButton icon={<Edit />} onClick={() => _editTodo(todo.id)} className="px-2" disabled={todo.completed || editingTodo === todo.id} />
        <IconButton icon={<CheckCheck className={cn(todo.completed && "text-[#333]")} />}
          onClick={() => _toggleTodo(todo.id)} className={cn("px-2", todo.completed && "text-[#333] bg-[#eee] border-[#eee]")} disabled={editingTodo === todo.id}  />
        <IconButton icon={<X />} onClick={() => _deleteTodo(todo.id)} className="px-2 " disabled={editingTodo === todo.id} />
      </motion.div>
    )
  }

  return (
    <div className="space-y-8 h-full overflow-y-auto px-4">
      <div className="flex flex-row gap-2 text-left ">
        <div className="flex-1">
          <input type="text" placeholder="Add a new task" value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                if (editingTodo) {
                  _saveTodo();
                } else {
                  _addTodo();
                }
              }
            }}
            className="w-full p-2 rounded-md bg-[#ccc]" />
        </div>
        <Button label={editingTodo ? "Save" : "Add"} onClick={editingTodo ? _saveTodo : _addTodo} disabled={!_validateTitle(title)} />
      </div>
      <div className="flex flex-col text-left space-y-2 ">

      <AnimatePresence>
        {todos.map(_renderTodo)}
      </AnimatePresence>
      </div>
    </div>
  )
}