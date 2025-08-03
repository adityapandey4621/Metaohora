const express = require('express');
const { Comment, User, Poem } = require('../models/Index');
const { authenticate } = require('../middleware/auth');
const { commentSchema } = require('../utils/validation');

const router = express.Router();

// Add comment to poem
router.post('/:poemId', authenticate, async (req, res) => {
  try {
    const { error } = commentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { poemId } = req.params;
    const { content } = req.body;

    // Check if poem exists
    const poem = await Poem.findByPk(poemId);
    if (!poem) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    const comment = await Comment.create({
      content,
      userId: req.user.id,
      poemId
    });

    const commentWithUser = await Comment.findByPk(comment.id, {
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'name']
      }]
    });

    res.status(201).json({
      message: 'Comment added successfully',
      comment: commentWithUser
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({ message: 'Server error adding comment' });
  }
});

// Get all comments for a poem
router.get('/:poemId', async (req, res) => {
  try {
    const { poemId } = req.params;

    // Check if poem exists
    const poem = await Poem.findByPk(poemId);
    if (!poem) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    const comments = await Comment.findAll({
      where: { poemId },
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'name']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({ comments });
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({ message: 'Server error fetching comments' });
  }
});

module.exports = router;