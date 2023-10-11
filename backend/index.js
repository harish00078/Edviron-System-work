// 4. Create the main Express app (app.js)

const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3000;

// Connect to your MongoDB database (replace with your connection string)
mongoose.connect('mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware for parsing JSON
app.use(express.json());

// Use the tasks routes
app.use('/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
