// 1. Create the Task model (models/task.js)

const mongoose = require('mongoose');

const students = new mongoose.Schema({
  // amount:Number,
  // name: String,
  
// frequency_months: Number,
});

const Std = mongoose.model('Students', students);

module.exports = Std;
