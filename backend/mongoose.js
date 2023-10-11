// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
