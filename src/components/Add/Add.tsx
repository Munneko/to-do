import React, { useState } from "react";
import styles from "./Add.module.css";

interface AddProps {
  onAdd: (text: string) => void;
}

const Add: React.FC<AddProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Нова задача..."
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default Add;
