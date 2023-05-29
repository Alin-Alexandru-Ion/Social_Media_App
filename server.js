const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Create a new Pool object to handle database connections
const pool = new Pool({
  user: 'react',
  host: 'localhost',
  database: 'sma',
  password: 'app',
  port: 5432,
});


// CORS Access fix
app.use(cors());


// Define a route to get all users
app.get('/api/users', async (req, res) => {
  try {
    // Query the database to get all users
    const result = await pool.query('SELECT * FROM users');
    // Return the result as JSON
    res.json(result.rows);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});


// Define a route to post a user
app.post('/api/users', async (req, res) => {
  const { username, nickname, password, question, answer } = req.body;
  try {
    // Insert a new user into the database
    await pool.query('INSERT INTO users (username, nickname, password, question, answer) VALUES ($1, $2, $3, $4, $5)',
    [username, nickname, password, question, answer]);
    // Return a success message
    res.status(201).json({ message: 'User added successfully' });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });  
    }
  });


// Define a route to update a user
app.put('/api/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { username, nickname, password, question, answer } = req.body;
  try {
    // Update the user with the specified id
    await pool.query('UPDATE users SET username = $1, nickname = $2, password = $3, question = $4, answer = $5 WHERE id = $6', 
    [username, nickname, password, question, answer, id]);
    // Return a success message
    res.status(200).json({ message: `User with id ${id} updated successfully` });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });  
  }
  });


// Define a route to delete a user
app.delete('/api/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    // Delete the user with the specified id
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    // Return a success message
    res.status(200).json({ message: `User with id ${id} deleted successfully` });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});