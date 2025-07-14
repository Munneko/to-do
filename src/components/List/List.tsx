import React from "react";
import Item from "../Item/Item";
import type { ItemProps } from "../Item/Item";
import styles from "./List.module.css";
import { Inbox } from "lucide-react";

export interface ListProps {
  todos: ItemProps[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const List: React.FC<ListProps> = ({ todos, onDelete, onToggle }) => (
  <div className={styles.todoList}>
    {todos.length === 0 && (
      <div className={styles.empty}>
        <Inbox size={32} style={{ opacity: 0.4, marginBottom: 8 }} />
        <div>У вас ще немає жодної задачі</div>
      </div>
    )}
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
