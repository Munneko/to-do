import React from "react";
import Item from "../Item/Item";
import type { ItemProps } from "../Item/Item";
import styles from "./List.module.css";

export interface ListProps {
  todos: ItemProps[];
  onDelete: (index: number) => void;
}

const List: React.FC<ListProps> = ({ todos, onDelete }) => (
  <div className={styles.todoList}>
    {todos.length === 0 && <p className={styles.empty}>Немає задач</p>}
    {todos.map((todo, idx) => (
      <Item key={idx} {...todo} onDelete={() => onDelete(idx)} />
    ))}
  </div>
);

export default List;
