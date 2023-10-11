const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  // Define your data schema here
});

const YourModel = mongoose.model('YourModel', schema);

module.exports = YourModel;
