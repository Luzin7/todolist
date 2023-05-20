const express = require('express');
const taskController = require('../controllers/tasksController');
const tasksMiddleWare = require('../middlewares/tasksMiddleWare');

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleWare.validateBody, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put(
	'/tasks/:id',
	tasksMiddleWare.validateBody,
	tasksMiddleWare.validateStatus,
	taskController.updateTask
);

module.exports = router;
