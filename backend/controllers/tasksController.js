// 2. Create the tasksController (controllers/tasksController.js)

// const Students = require('../models/task');
const Std = require('../models/task');
// const Fee = require('../models/task');
// const Task = require('../models/task');

// Create a new task
// Create a new task
async function createTask(req, res) {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the task.' });
  }
}

// Get all tasks
async function getAllTasks(req, res) {
  try {
    const tasks = await Std.find();
    res.status(200).json(tasks);
    console.log('we have all the tasks');
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve tasks.' });
  }
}

// Add more controller functions as needed (e.g., updateTask, deleteTask)

module.exports = {
  createTask,
  getAllTasks,
  // Add other controller functions here
};
