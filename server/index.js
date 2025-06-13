const express = require('express');
const app = express();
app.use(express.json());

// mock data
const metrics = { users: 10, sessions: 5 };
const users = [{ id: 1, name: 'Admin' }, { id: 2, name: 'Analyst' }];
const flags = { darkMode: false };
const logs = [];

app.get('/api/metrics', (req, res) => {
  res.json(metrics);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/login', (req, res) => {
  const { username } = req.body;
  res.json({ token: 'mock-token', user: { username } });
});

app.get('/api/flags', (req, res) => {
  res.json(flags);
});

app.post('/api/logs', (req, res) => {
  logs.push({ timestamp: new Date(), ...req.body });
  res.status(201).json({ status: 'logged' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
