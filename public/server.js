const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

// Create a new Pool object to handle database connections
const pool = new Pool({
  user: 'u0_a965',
  host: '127.0.0.1',
  database: 'sma',
  port: 5432,
});

// Define a route to get all users
app.get('/api/users', async (req, res) => {
  try {
    // Query the database to get all users
    const result = await pool.query('SELECT * FROM users');
    // Return the result as JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
