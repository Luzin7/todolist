const API_URL = 'http://localhost:7777/tasks';

const addTasks = async (task) => {
  const taskBody = { title: task };
  try {
    const response = await (
      await fetch(API_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskBody),
      })
    ).json();

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default addTasks;
