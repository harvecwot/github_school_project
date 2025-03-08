// Create a new Express server
const express = require('express');
const app = express();

// Define the port to listen on
const port = 3000;

// Setup the middleware for parsing JSON bodies
app.use(express.json());

// Define a route for GET requests to '/users'
app.get('/users', (req, res) => {
  // Query the database for all users
  const users = [
    { id: 1, name: 'John Doe', age: 32 },
    { id: 2, name: 'Jane Smith', age: 27 },
    { id: 3, name: 'Bob Johnson', age: 45 },
  ];

  // Return the users in JSON format
  res.json(users);
});

// Define a route for GET requests to '/users/:id'
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
