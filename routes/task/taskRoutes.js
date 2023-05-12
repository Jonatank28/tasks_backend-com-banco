const { Router } = require('express');
const taskRoutes = Router();

const TaskController = require('../../controllers/task/taskController');
const taskController = new TaskController();

const route = '/tasks';

taskRoutes.get(`${route}`, taskController.getDataTasks);
taskRoutes.post(`${route}`, taskController.updateFavoriteTask);
taskRoutes.delete(`${route}/:id`, taskController.deleteTask);

module.exports = taskRoutes;