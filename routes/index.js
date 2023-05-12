const { Router } = require('express');
const routes = Router();
const urlBase = '/api'

// Autenticação
const task = require("./task/taskRoutes");
const tag = require("./tag/tagRoutes");
const priority = require("./priority/priorityRoutes");

routes.use(urlBase + '/', task);
routes.use(urlBase + '/', tag);
routes.use(urlBase + '/', priority);

module.exports = routes;