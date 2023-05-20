import React, { useContext, useState } from 'react';
import './addTask.css';
import addTasks from '../../services/addTask';
import fetchTasks from '../../services/getTasks';
import { TasksContext } from '../../contexts/TasksContext';

export default function AddTask() {
  const [inputTask, setInputTask] = useState('');
  const { setTasks } = useContext(TasksContext);

  const handleNewTask = async (task) => {
    await addTasks(task);
    const allTasks = await fetchTasks();
    setTasks(allTasks);
  };
  return (
    <form
      className="task__form"
      onSubmit={(e) => {
        e.preventDefault();
        handleNewTask(inputTask);
      }}
    >
      <input
        type="text"
        placeholder="Sua próxima tarefa..."
        value={inputTask}
        onInput={({ target }) => setInputTask(target.value)}
      />
      <button
        type="button"
        id="btn__add__task"
        onClick={() => handleNewTask(inputTask)}
      >
        Add
      </button>
    </form>
  );
}
