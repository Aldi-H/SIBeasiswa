import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, users } from '../db/user.js';

const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Both email and password is required' });
    return;
  }
  if (users.find((user) => user.email === email)) {
    res.status(400).json({ message: 'Email already in use' });
    return;
  }
  users.push({ email, password, role: 'SISWA' });

  const token = jwt.sign({ email, role: 'SISWA' }, JWT_SECRET);
  res.json({
    role: 'SISWA',
    token,
  });
});

export default router;
