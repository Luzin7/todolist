const API_URL = (id) => `http://localhost:7777/tasks/${id}`;

const updateTask = async (id, title, status) => {
  const updateBody = { title, status };

  await fetch(API_URL(id), {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateBody),
  });
};

export default updateTask;
