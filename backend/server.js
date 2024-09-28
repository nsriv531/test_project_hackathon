const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

// Allow requests from React app (which runs on a different port)
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('./C:/Program Files/SQLiteStudio/mydatabase.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Get all users (example endpoint)
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM test_table';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "users": rows });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
