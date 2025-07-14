import List from "./components/List/List";
import Add from "./components/Add/Add";
import styles from "./style/App.module.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";
import { addTodo, deleteTodo, toggleTodo } from "./redux/slices/todoSlice";

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.appContainer}>
        <h1>To-Do List</h1>
        <Add onAdd={handleAdd} />
        <List todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default App;
