const { Router } = require('express');
const tagRoutes = Router();

const TagController = require('../../controllers/tag/tagController');
const tagController = new TagController();

const route = '/tag';

tagRoutes.get(`${route}`, tagController.getDataTags);
tagRoutes.post(`${route}`, tagController.updateTag);

module.exports = tagRoutes;