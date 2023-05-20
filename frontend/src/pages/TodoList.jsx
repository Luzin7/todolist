import { React } from 'react';
import AddTask from '../components/AddTask/AddTask';
import TasksList from '../components/TasksList/TasksList';
import '../styles/reset.css';
import { TaskProvider } from '../contexts/TasksContext';

function TodoList() {
  return (
    <main>
      <TaskProvider>
        <AddTask />
        <TasksList />
      </TaskProvider>
    </main>
  );
}

export default TodoList;
