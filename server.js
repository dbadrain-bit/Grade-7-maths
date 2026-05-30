import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenerativeAI } from '@google/generative-ai';
import express from 'express';
import { createClient } from '@supabase/supabase-js';
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

// Supabase Setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Initialize default admin if it doesn't exist
(async () => {
  try {
    const { data: adminUser } = await supabase
      .from('users')
      .select('*')
      .eq('username', 'admin')
      .single();

    if (!adminUser) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await supabase.from('users').insert({
        username: 'admin',
        password_hash: hashedPassword,
        email: 'admin@mathapp.com',
        is_admin: true
      });
      console.log('Admin user created (username: admin, password: admin123)');
    }
  } catch (err) {
    console.log('Admin initialization:', err.message);
  }
})();

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
    const { error } = await supabase.from('users').insert({
      username,
      password_hash: hashedPassword,
      email: email || null
    });

    if (error) {
      console.error('Register error:', error);
      if (error.message.includes('unique')) {
        return res.status(400).json({ error: 'Username already exists' });
      }
      return res.status(500).json({ error: 'Database error', details: error.message });
    }
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register exception:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, isAdmin: user.is_admin },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.is_admin
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ========================
// Admin Routes
// ========================

app.get('/api/admin/users', verifyToken, async (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  try {
    const { data: users, error } = await supabase
      .from('users')
      .select('id, username, email, is_admin, created_at');

    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
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
    const { data, error } = await supabase
      .from('users')
      .insert({
        username,
        password_hash: hashedPassword,
        email: email || null,
        is_admin: isAdmin ? true : false
      })
      .select('id')
      .single();

    if (error) {
      if (error.message.includes('unique')) {
        return res.status(400).json({ error: 'Username already exists' });
      }
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'User created successfully', userId: data.id });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/admin/users/:id', verifyToken, async (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const userId = req.params.id;
  if (userId == 1) {
    return res.status(400).json({ error: 'Cannot delete admin user' });
  }

  try {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId);

    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/admin/users/:id/toggle-admin', verifyToken, async (req, res) => {
  if (!req.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const userId = req.params.id;

  try {
    const { data: user } = await supabase
      .from('users')
      .select('is_admin')
      .eq('id', userId)
      .single();

    const { error } = await supabase
      .from('users')
      .update({ is_admin: !user.is_admin })
      .eq('id', userId);

    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Admin status toggled' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ========================
// Progress Routes
// ========================

app.post('/api/progress', verifyToken, async (req, res) => {
  const { topic, score, totalQuestions } = req.body;

  if (!topic || score === undefined || !totalQuestions) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data: existing } = await supabase
      .from('progress')
      .select('id')
      .eq('user_id', req.userId)
      .eq('topic', topic)
      .single();

    if (existing) {
      await supabase
        .from('progress')
        .update({
          score,
          total_questions: totalQuestions,
          created_at: new Date().toISOString()
        })
        .eq('id', existing.id);
    } else {
      await supabase.from('progress').insert({
        user_id: req.userId,
        topic,
        score,
        total_questions: totalQuestions
      });
    }

    res.status(201).json({ message: 'Progress saved' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/progress', verifyToken, async (req, res) => {
  try {
    const { data: progress, error } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', req.userId)
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ========================
// AI Chatbot Route
// ========================

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', verifyToken, async (req, res) => {
  const { message, topic } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message required' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are a Grade 7 Ontario math tutor helping students understand concepts. The student is learning about "${topic || 'general math'}".

Student question: ${message}

Provide a helpful hint or explanation to guide the student to the answer (don't give the direct answer). Keep it concise (2-3 sentences).`;

    const result = await model.generateContent(prompt);
    const hint = result.response.text();

    res.json({ hint: hint.substring(0, 500) });

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
