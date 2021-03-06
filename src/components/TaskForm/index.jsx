import { useContext, useRef } from "react";
import { TasksContext } from "../../providers/TaskProvider";
import styles from "./TaskForm.module.scss";

export const TaskForm = () => {
  const { addTask } = useContext(TasksContext);

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { current: input } = inputRef;

    if (!input || input.value.trim().length === 0) {
      return;
    }

    const task = {
      description: input.value.trim(),
      completed: false,
    };

    addTask(task);
    input.value = "";
  };

  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
