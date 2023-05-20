/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import './tasksList.css';
import { TasksContext } from '../../contexts/TasksContext';
import formatDate from '../../scripts/formatDate';
import deleteTask from '../../services/deleteTask';
import fetchTasks from '../../services/getTasks';
import updateTask from '../../services/updateTask';

export default function TasksList() {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const allTasks = await fetchTasks();
    setTasks(allTasks);
  };

  const handleUpdateTask = async (id, title, status) => {
    await updateTask(id, title, status);
    const allTasks = await fetchTasks();
    setTasks(allTasks);
  };

  return (
    <>
      {tasks ? (
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Criada em</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(({ id, task, status, created_at }) => (
              <tr key={id}>
                <td>{task}</td>
                <td>{formatDate(created_at)}</td>
                <td>
                  <select
                    name="status"
                    id="status"
                    defaultValue={status}
                    onChange={({ target }) =>
                      handleUpdateTask(id, task, target.value)
                    }
                  >
                    <option value="pendent">Pendente</option>
                    <option value="in progress">Em andamento</option>
                    <option value="done">Concluída</option>
                  </select>
                </td>
                <td id="actions">
                  <button className="btn__actions">
                    <MdDelete
                      id="icon__delete"
                      className="action__icon"
                      onClick={() => handleDeleteTask(id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>carregando suas tarefas...</span>
      )}
    </>
  );
}
