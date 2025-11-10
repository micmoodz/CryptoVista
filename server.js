const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = {}; // In-memory user store. Replace with DB in production.

// Store verification status in-memory for demo
const verification = {};
const JWT_SECRET = 'your_secret_key'; // Use env variable in production.

// Signup endpoint




app.post('/api/signup', async (req, res) => {
  let { username, password } = req.body;
  // If any uppercase letter is present, reject signup
  if (/[A-Z]/.test(username)) {
    return res.status(400).json({ error: 'Invalid credentials: email must be all lowercase letters' });
  }
  // Password must contain 1 uppercase, 1 number, 1 special character
  if (!(/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password))) {
    return res.status(400).json({ error: 'Invalid credentials: password must contain 1 uppercase letter, 1 number, and 1 special character' });
  }
  if (users[username]) return res.status(400).json({ error: 'User exists' });
  const hashed = await bcrypt.hash(password, 10);
  users[username] = { password: hashed };
  res.json({ success: true });
});

// Login endpoint

app.post('/api/login', async (req, res) => {
  let { username, password } = req.body;
  username = username.toLowerCase();
  const user = users[username];
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Auth check endpoint

app.get('/api/me', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    const username = decoded.username;
    res.json({
      username,
      mobileVerified: verification[username]?.mobileVerified || false,
      twoStepEnabled: verification[username]?.twoStepEnabled || false,
      mobile: verification[username]?.mobile || ''
    });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Enable/disable 2-step verification
app.post('/api/enable-2step', (req, res) => {
  const { username, enabled } = req.body;
  if (!users[username]) return res.status(400).json({ error: 'User not found' });
  verification[username] = verification[username] || {};
  verification[username].twoStepEnabled = !!enabled;
  res.json({ success: true, twoStepEnabled: verification[username].twoStepEnabled });
});

// Mobile number verification
app.post('/api/verify-mobile', (req, res) => {
  const { username, mobile } = req.body;
  if (!users[username]) return res.status(400).json({ error: 'User not found' });
  verification[username] = verification[username] || {};
  verification[username].mobile = mobile;
  verification[username].mobileVerified = true;
  res.json({ success: true, mobileVerified: true });
});

app.listen(5000, () => console.log('Auth server running on port 5000'));
