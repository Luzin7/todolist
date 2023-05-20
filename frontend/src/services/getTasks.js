const API_URL = 'http://localhost:7777/tasks';

const fetchTasks = async () => {
  try {
    const response = await (await fetch(API_URL)).json();

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchTasks;
