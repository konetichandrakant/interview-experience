const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  companyName: {
    type: String,
    required: true,
  },
  compensation: {
    type: Number,
    required: true,
  },
  yearOfPlacement: {
    type: Number,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
