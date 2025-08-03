const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const poemSchema = Joi.object({
  title: Joi.string().min(1).max(200).required(),
  content: Joi.string().min(10).max(10000).required(),
  emotionTag: Joi.string().valid('joy', 'sadness', 'anger', 'fear', 'surprise', 'love', 'hope', 'melancholy', 'peace', 'passion').optional(),
  tags: Joi.array().items(Joi.string().max(30)).max(10).optional(),
  isPublic: Joi.boolean().optional()
});

const commentSchema = Joi.object({
  content: Joi.string().min(1).max(1000).required()
});

module.exports = {
  registerSchema,
  loginSchema,
  poemSchema,
  commentSchema
};