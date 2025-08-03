const express = require('express');
const Poem = require('../models/Poem');
const User = require('../models/User');
const Comment = require('../models/Comment');
const { authenticate } = require('../middleware/auth');
const { poemSchema } = require('../utils/validation');

const router = express.Router();

// Create poem
router.post('/', authenticate, async (req, res) => {
  try {
    const { error } = poemSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { title, content, emotionTag, tags, isPublic } = req.body;
    
    const poem = new Poem({
      title,
      content,
      emotionTag,
      tags: tags || [],
      isPublic: isPublic !== undefined ? isPublic : true,
      author: req.user._id
    });

    await poem.save();
    await poem.populate('author', 'name email');

    res.status(201).json({
      message: 'Poem created successfully',
      poem
    });
  } catch (error) {
    console.error('Create poem error:', error);
    res.status(500).json({ message: 'Server error creating poem' });
  }
});

// Get all poems
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      emotionTag, 
      search, 
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query = { isPublic: true };
    
    if (emotionTag) {
      query.emotionTag = emotionTag;
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const poems = await Poem.find(query)
      .populate('author', 'name email')
      .sort(sort)
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    const totalPoems = await Poem.countDocuments(query);

    res.json({
      poems,
      totalPages: Math.ceil(totalPoems / limit),
      currentPage: parseInt(page),
      totalPoems,
      hasNextPage: page * limit < totalPoems,
      hasPrevPage: page > 1
    });
  } catch (error) {
    console.error('Get poems error:', error);
    res.status(500).json({ message: 'Server error fetching poems' });
  }
});

// Get specific poem
router.get('/:id', async (req, res) => {
  try {
    const poem = await Poem.findById(req.params.id)
      .populate('author', 'name email bio joinedAt');

    if (!poem || !poem.isPublic) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    // Increment view count
    poem.views += 1;
    await poem.save();

    // Get comments
    const comments = await Comment.find({ poem: req.params.id })
      .populate('author', 'name email')
      .sort({ createdAt: -1 });

    res.json({ 
      poem: {
        ...poem.toObject(),
        commentsCount: comments.length
      },
      comments 
    });
  } catch (error) {
    console.error('Get poem error:', error);
    res.status(500).json({ message: 'Server error fetching poem' });
  }
});

// Update poem
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { error } = poemSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const poem = await Poem.findById(req.params.id);

    if (!poem) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    // Check if user is the author
    if (poem.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You can only edit your own poems' });
    }

    const updatedPoem = await Poem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'name email');

    res.json({
      message: 'Poem updated successfully',
      poem: updatedPoem
    });
  } catch (error) {
    console.error('Update poem error:', error);
    res.status(500).json({ message: 'Server error updating poem' });
  }
});

// Delete poem
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const poem = await Poem.findById(req.params.id);

    if (!poem) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    // Check if user is the author
    if (poem.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You can only delete your own poems' });
    }

    // Delete associated comments
    await Comment.deleteMany({ poem: req.params.id });
    
    // Delete poem
    await Poem.findByIdAndDelete(req.params.id);

    res.json({ message: 'Poem deleted successfully' });
  } catch (error) {
    console.error('Delete poem error:', error);
    res.status(500).json({ message: 'Server error deleting poem' });
  }
});

// Like/Unlike poem
router.post('/:id/like', authenticate, async (req, res) => {
  try {
    const poem = await Poem.findById(req.params.id);

    if (!poem) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    const userId = req.user._id;
    const isLiked = poem.likes.includes(userId);

    if (isLiked) {
      poem.likes = poem.likes.filter(id => id.toString() !== userId.toString());
    } else {
      poem.likes.push(userId);
    }

    await poem.save();

    res.json({
      message: isLiked ? 'Poem unliked' : 'Poem liked',
      likesCount: poem.likes.length,
      isLiked: !isLiked
    });
  } catch (error) {
    console.error('Like poem error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;