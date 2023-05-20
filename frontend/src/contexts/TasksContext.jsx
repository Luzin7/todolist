import { React, createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import fetchTasks from '../services/getTasks';

export const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const allTasks = await fetchTasks();
      setTasks(allTasks);
    };

    fetchList();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
