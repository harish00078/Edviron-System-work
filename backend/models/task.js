// 1. Create the Task model (models/task.js)

const mongoose = require('mongoose');

const feeheads = new mongoose.Schema({
  amount:Number,
  name: String,
  
frequency_months: Number,
});

const Fee = mongoose.model('Feeheads', feeheads);

module.exports = Fee;
