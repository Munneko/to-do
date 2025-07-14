import React from "react";
import styles from "./Item.module.css";
import { Check, Square, Trash } from "lucide-react";

export interface ItemProps {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  onDelete?: () => void;
  onToggle?: () => void;
}

const Item: React.FC<ItemProps> = ({
  text,
  completed,
  createdAt,
  onDelete,
  onToggle,
}) => (
  <div className={styles.Item + (completed ? " " + styles.completed : "")}>
    <div>
      <span>{text}</span>
      <span className={styles.Date}>
        {new Date(createdAt).toLocaleString()}
      </span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <button
        className={styles.checkboxBtn}
        tabIndex={0}
        type="button"
        onClick={onToggle}
      >
        {completed ? <Check size={20} /> : <Square size={20} />}
      </button>
      <button onClick={onDelete} className={styles.deleteBtn}>
        <Trash size={20} color="#e74c3c" />
      </button>
    </div>
  </div>
);

export default Item;
