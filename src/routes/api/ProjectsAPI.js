const express = require('express')
const router = express.Router()
const ProjectController = require('../../controllers/ProjectController');

router.post('/create-project',ProjectController.createProject);
router.get('/get-project',ProjectController.getProject);

module.exports = router;
