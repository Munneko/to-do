import React from "react";
import Item from "../Item/Item";
import type { ItemProps } from "../Item/Item";
import styles from "./List.module.css";

export interface ListProps {
  todos: ItemProps[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const List: React.FC<ListProps> = ({ todos, onDelete, onToggle }) => (
  <div className={styles.todoList}>
    {todos.length === 0 && <p className={styles.empty}>Немає задач</p>}
    {todos.map((todo) => (
      <Item
        key={todo.id}
        {...todo}
        onDelete={() => onDelete(todo.id)}
        onToggle={() => onToggle(todo.id)}
      />
    ))}
  </div>
);

export default List;
