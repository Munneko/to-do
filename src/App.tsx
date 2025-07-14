import React, { useState } from "react";
import List from "./components/List/List";
import Add from "./components/Add/Add";
import type { ItemProps } from "./components/Item/Item";
import styles from "./style/App.module.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ItemProps[]>([
    {
      text: "Перша задача",
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ]);

  const handleAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const handleDelete = (index: number) => {
    setTodos((todos) => todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.appContainer}>
        <h1>To-Do List</h1>
        <Add onAdd={handleAdd} />
        <List todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
