const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./userModel');
const Article = require('./articleModel');
const verify = require('./verifyToken');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Registration route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign({ username: user.username, userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    return res.status(200).json({ message: 'Authentication successful', token });
  } else {
    return res.status(401).json({ message: 'Authentication failed' });
  }
});

// Create an article route (protected)
app.post('/articles', verify, async (req, res) => {
  const { title, content, companyName, compensation, yearOfPlacement } = req.body;
  const authorId = req.user.userId; // Assuming you have middleware to verify the JWT token

  const article = new Article({
    title,
    content,
    companyName,
    compensation,
    yearOfPlacement,
    author: authorId,
  });

  await article.save();

  const user = await User.findById(authorId);
  user.articles.push(article._id);
  await user.save();

  res.status(201).json({ message: 'Article created successfully' });
});

// Get articles of a user (protected)
app.get('/articles', verify, async (req, res) => {
  const authorId = req.user.userId; // Assuming you have middleware to verify the JWT token

  const articles = await Article.find({ author: authorId });
  res.status(200).json(articles);
});

// Get article by ID
app.get('/articles/:articleId', verify, async (req, res) => {
  const articleId = req.params.articleId;
  const article = await Article.findById(articleId);

  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.status(200).json(article);
});

// Start the Express app
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
