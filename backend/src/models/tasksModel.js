const connection = require('./connection');

const getAll = async () => {
	const [tasks] = await connection.execute('SELECT * FROM tasks');
	return tasks;
};

const createTask = async (task) => {
	const { title } = task;
	const dateUTC = new Date(Date.now()).toUTCString();

	const query = 'INSERT INTO tasks(task, status, created_at) VALUES (?, ?, ?)';

	const [createdTask] = await connection.execute(query, [
		title,
		'pendent',
		dateUTC,
	]);

	return { insetId: createdTask.insertId };
};

const deleteTask = async (id) => {
	const query = 'DELETE FROM tasks WHERE id = ?';

	const removedTask = await connection.execute(query, [id]);

	return removedTask;
};

const updateTask = async (id, task) => {
	const query = 'UPDATE tasks SET task = ?, status = ? WHERE id = ?';

	const { title, status } = task;

	const [updatedTask] = await connection.execute(query, [title, status, id]);

	return updatedTask;
};

module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask,
};
