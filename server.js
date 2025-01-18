import express from 'express';
    import Database from 'better-sqlite3';

    const db = new Database('database.db');
    const app = express();
    const port = 3000;

    // Create tables
    db.prepare(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();

    app.use(express.json());

    // API routes
    app.get('/api/users', (req, res) => {
      const users = db.prepare('SELECT * FROM users').all();
      res.json(users);
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
