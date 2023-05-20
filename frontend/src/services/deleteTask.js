const API_URL = (id) => `http://localhost:7777/tasks/${id}`;

const deleteTask = async (id) => {
  try {
    await fetch(API_URL(id), {
      method: 'delete',
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteTask;
