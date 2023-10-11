const express = require('express');
const mongoose = require('mongoose');

const app = express();


// ... rest of your Express app setup
const yourRoutes = require('./routes/routes');

// Replace 'your_connection_string' with your actual connection string from MongoDB Atlas
const dbURI = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas: ', error);
  });
  

app.use('/api', yourRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
