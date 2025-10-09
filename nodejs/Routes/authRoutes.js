const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Auth = require('../Models/AuthModels');
const SECRET_KEY ="authentication"
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { uname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new Auth ({ uname, email, password: hashedPassword });

  try {
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Auth.findOne({ email });

  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id },SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

router.post('/logout', (req, res) => {
  // Optionally handle token invalidation by maintaining a blacklist
  // For now, simply respond indicating the logout action
  res.status(200).json({ message: "User logged out successfully" });
});

module.exports = router; 
