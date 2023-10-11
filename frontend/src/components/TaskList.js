// src/components/TaskList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tasks/api/get') // Replace with the actual URL of your backend API
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h2>{task}</h2>
            {/* <p>{task.description}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
