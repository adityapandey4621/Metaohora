const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [1, 'Title must be at least 1 character'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    minlength: [10, 'Poem must be at least 10 characters'],
    maxlength: [10000, 'Poem cannot exceed 10000 characters']
  },
  emotionTag: {
    type: String,
    enum: ['joy', 'sadness', 'anger', 'fear', 'surprise', 'love', 'hope', 'melancholy', 'peace', 'passion'],
    default: null
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  views: {
    type: Number,
    default: 0
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: 30
  }]
}, {
  timestamps: true
});

// Index for search
poemSchema.index({ title: 'text', content: 'text', tags: 'text' });
poemSchema.index({ author: 1, createdAt: -1 });
poemSchema.index({ emotionTag: 1 });

module.exports = mongoose.model('poems', poemSchema);