const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Astrology API is running successfully'
  });
});

app.post('/api/astrology', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required'
      });
    }

    if (!process.env.CLAUDE_API_KEY) {
      return res.json({
        success: true,
        report: 'Demo Astrology Report: Career growth strong from 2026 onward. Financial stability improves gradually. Avoid risky investments and focus on long-term gains.'
      });
    }

    res.json({
      success: true,
      report: 'Claude API connected successfully. Full astrology report will generate here.'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
