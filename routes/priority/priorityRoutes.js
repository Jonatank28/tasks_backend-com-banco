const { Router } = require('express');
const priorityRoutes = Router();

const PriorityController = require('../../controllers/priority/priorityController');
const priorityController = new PriorityController();

const route = '/priority';

priorityRoutes.get(`${route}`, priorityController.getDataPrioritys);
priorityRoutes.post(`${route}`, priorityController.updatePriorityTask);

module.exports = priorityRoutes;