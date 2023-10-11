// 3. Create routes (routes/tasks.js)

const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Create a new task
router.post('/post', tasksController.createTask);

// Get all tasks
router.get('/get', tasksController.getAllTasks);

// Add more routes as needed (e.g., update and delete tasks)

module.exports = router;
