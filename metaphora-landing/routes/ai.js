const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Generate poetic prompt (simplified version without OpenAI for now)
router.post('/prompt', authenticate, async (req, res) => {
  try {
    const { theme } = req.body;

    if (!theme) {
      return res.status(400).json({ message: 'Theme is required' });
    }

    // Creative prompt templates
    const promptTemplates = [
      `Write about ${theme} as if it were a distant memory floating on the wind`,
      `Imagine ${theme} through the eyes of someone seeing it for the very last time`,
      `Describe ${theme} using only metaphors from the natural world`,
      `Tell the story of ${theme} in reverse, starting from its end`,
      `What would ${theme} whisper to the stars at midnight?`,
      `Paint ${theme} with words that taste like childhood summers`,
      `If ${theme} could write a letter to tomorrow, what would it say?`,
      `Capture the essence of ${theme} in the language of forgotten dreams`,
      `Write ${theme} as a conversation between two seasons`,
      `Express ${theme} through the rhythm of a heartbeat`
    ];

    const randomPrompt = promptTemplates[Math.floor(Math.random() * promptTemplates.length)];

    res.json({
      theme,
      prompt: randomPrompt,
      inspiration: `Let your imagination flow freely with this theme. Remember, poetry is about capturing emotion and painting with words.`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('AI prompt generation error:', error);
    res.status(500).json({ message: 'Error generating prompt' });
  }
});

// Analyze poem tone (simplified version)
router.post('/tone', authenticate, async (req, res) => {
  try {
    const { poemText } = req.body;

    if (!poemText) {
      return res.status(400).json({ message: 'Poem text is required' });
    }

    // Simple keyword-based analysis
    const emotionKeywords = {
      joy: ['happy', 'bright', 'smile', 'laugh', 'sunshine', 'dance', 'celebrate', 'joy', 'delight'],
      sadness: ['tears', 'cry', 'sorrow', 'grief', 'melancholy', 'blue', 'rain', 'lonely', 'empty'],
      love: ['heart', 'love', 'kiss', 'embrace', 'forever', 'together', 'soul', 'passion', 'devotion'],
      hope: ['tomorrow', 'future', 'dream', 'believe', 'faith', 'light', 'dawn', 'possibilities'],
      peace: ['calm', 'quiet', 'serene', 'still', 'gentle', 'soft', 'peaceful', 'tranquil'],
      melancholy: ['autumn', 'fading', 'distant', 'memory', 'whisper', 'shadow', 'twilight'],
      passion: ['fire', 'burning', 'intense', 'desire', 'flame', 'wild', 'fierce', 'storm']
    };

    const lowerText = poemText.toLowerCase();
    const emotionScores = {};

    // Calculate scores for each emotion
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
      emotionScores[emotion] = keywords.reduce((score, keyword) => {
        const matches = (lowerText.match(new RegExp(keyword, 'g')) || []).length;
        return score + matches;
      }, 0);
    }

    // Find dominant emotion
    const dominantEmotion = Object.keys(emotionScores).reduce((a, b) => 
      emotionScores[a] > emotionScores[b] ? a : b
    );

    const analysisTexts = {
      joy: "This poem radiates with positive energy and celebratory spirit, filled with uplifting imagery and optimistic tone.",
      sadness: "This piece carries deep emotional weight, exploring themes of loss and melancholy with poignant expression.",
      love: "The poem is infused with romantic sentiment and heartfelt emotion, celebrating connection and devotion.",
      hope: "This work expresses optimism and forward-looking perspective, inspiring belief in possibilities ahead.",
      peace: "The poem creates a sense of tranquility and calm, with gentle imagery and soothing rhythm.",
      melancholy: "This piece captures bittersweet emotion, blending nostalgia with contemplative reflection.",
      passion: "The poem burns with intense emotion and powerful imagery, expressing deep feelings with vivid language."
    };

    res.json({
      analysis: analysisTexts[dominantEmotion] || "This poem showcases beautiful emotional expression with rich imagery and thoughtful composition.",
      dominantEmotion,
      emotionScores,
      confidence: Math.min(0.95, 0.6 + (emotionScores[dominantEmotion] * 0.1)),
      suggestions: [
        "Consider adding more sensory details to enhance the emotional impact",
        "Experiment with different poetic devices like metaphors or alliteration",
        "Try varying the rhythm and line breaks for better flow"
      ],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('AI tone analysis error:', error);
    res.status(500).json({ message: 'Error analyzing poem tone' });
  }
});

// Get writing inspiration
router.get('/inspiration', authenticate, async (req, res) => {
  try {
    const inspirations = [
      {
        type: "Quote",
        content: "Poetry is when an emotion has found its thought and the thought has found words.",
        author: "Robert Frost"
      },
      {
        type: "Prompt",
        content: "Write about the color of sound, or the sound of color."
      },
      {
        type: "Exercise",
        content: "Write a poem using only questions, or write a poem that tells a story backwards."
      },
      {
        type: "Quote",
        content: "The job of the poet is to render the world - to see it and report it without loss, without perversion.",
        author: "Mark Strand"
      },
      {
        type: "Technique",
        content: "Try the 'Golden Shovel' technique: take a line from another poem and use each word as the last word of each line in your new poem."
      }
    ];

    const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];

    res.json({
      inspiration: randomInspiration,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Get inspiration error:', error);
    res.status(500).json({ message: 'Error fetching inspiration' });
  }
});

module.exports = router;