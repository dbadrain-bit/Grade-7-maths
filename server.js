import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database Setup
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) console.error('Database error:', err);
  else console.log('Connected to SQLite database');
});

// Initialize database tables
db.serialize(() => {
  // Users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      email TEXT,
      isAdmin INTEGER DEFAULT 0,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Progress table
  db.run(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      topic TEXT NOT NULL,
      score INTEGER,
      totalQuestions INTEGER,
      attempts INTEGER DEFAULT 1,
      lastAttempt DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(userId, topic),
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);

  // Create default admin if it doesn't exist
  db.get('SELECT * FROM users WHERE username = ?', ['admin'], async (err, row) => {
    if (!row) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      db.run(
        'INSERT INTO users (username, password, email, isAdmin) VALUES (?, ?, ?, ?)',
        ['admin', hashedPassword, 'admin@mathapp.com', 1],
        (err) => {
          if (err) console.error('Error creating admin:', err);
          else console.log('Admin user created (username: admin, password: admin123)');
        }
      );
    }
  });
});

// Middleware for JWT verification
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;
    next();
  });
};

// ========================
// Authentication Routes
// ========================

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, hashedPassword, email || null],
      function (err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Username already exists' });
          }
          return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  });
});

// ========================
// Admin Routes
// ========================

app.get('/api/admin/users', verifyToken, (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  db.all('SELECT id, username, email, isAdmin, createdAt FROM users', (err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(users);
  });
});

app.post('/api/admin/users', verifyToken, async (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const { username, password, email, isAdmin } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run(
      'INSERT INTO users (username, password, email, isAdmin) VALUES (?, ?, ?, ?)',
      [username, hashedPassword, email || null, isAdmin ? 1 : 0],
      function (err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Username already exists' });
          }
          return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User created successfully', userId: this.lastID });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/admin/users/:id', verifyToken, (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const userId = req.params.id;
  if (userId == 1) {
    return res.status(400).json({ error: 'Cannot delete admin user' });
  }

  db.run('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'User deleted successfully' });
  });
});

app.put('/api/admin/users/:id/toggle-admin', verifyToken, (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const userId = req.params.id;
  db.run(
    'UPDATE users SET isAdmin = 1 - isAdmin WHERE id = ?',
    [userId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'Admin status toggled' });
    }
  );
});

// ========================
// Progress Routes
// ========================

app.post('/api/progress', verifyToken, (req, res) => {
  const { topic, score, totalQuestions } = req.body;

  if (!topic || score === undefined || !totalQuestions) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    `INSERT INTO progress (userId, topic, score, totalQuestions, attempts)
     VALUES (?, ?, ?, ?, 1)
     ON CONFLICT(userId, topic) DO UPDATE SET
     attempts = attempts + 1,
     score = ?,
     totalQuestions = ?,
     lastAttempt = CURRENT_TIMESTAMP`,
    [req.userId, topic, score, totalQuestions, score, totalQuestions],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Progress saved' });
    }
  );
});

app.get('/api/progress', verifyToken, (req, res) => {
  db.all(
    'SELECT * FROM progress WHERE userId = ? ORDER BY lastAttempt DESC',
    [req.userId],
    (err, progress) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(progress);
    }
  );
});

// ========================
// AI Chatbot Route
// ========================

app.post('/api/chat', verifyToken, async (req, res) => {
  const { message, topic } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message required' });
  }

  try {
    // Using Hugging Face Inference API (free)
    const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
      headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_test'}` },
      method: 'POST',
      body: JSON.stringify({
        inputs: `You are a Grade 7 Ontario math tutor helping students understand concepts. The student is learning about "${topic || 'general math'}". 
        
Student question: ${message}

Provide a helpful hint or explanation to guide the student to the answer (don't give the direct answer). Keep it concise (2-3 sentences).`,
        parameters: {
          max_new_tokens: 200,
          temperature: 0.7
        }
      })
    });

    const result = await response.json();
    
    if (result[0]?.generated_text) {
      const hint = result[0].generated_text.split('Provide a helpful hint')[1]?.trim() || result[0].generated_text;
      res.json({ hint: hint.substring(0, 500) });
    } else {
      // Fallback if API fails
      res.json({ 
        hint: `I'm here to help! For ${topic || 'this topic'}, think about the fundamentals. Break the problem into smaller steps. What do you already know about this concept?` 
      });
    }
  } catch (error) {
    console.error('Chat error:', error);
    res.json({ 
      hint: `Let me help! Try thinking about the steps involved. What have you learned about ${topic || 'this concept'} so far? Break it down into smaller parts.` 
    });
  }
});

// ========================
// Serve Static Files
// ========================

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/app.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the app at http://localhost:${PORT}`);
  console.log(`Admin panel at http://localhost:${PORT}/admin`);
  console.log(`\nDefault credentials: username: admin, password: admin123`);
});
