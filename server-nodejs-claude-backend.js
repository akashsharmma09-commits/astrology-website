const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve frontend index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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

    // Demo response (free version)
    res.json({
      success: true,
      report: `Detailed Astrology Report:\n\nCareer: Strong growth from 2026 onward. Promotion chances are high.\n\nWealth: Financial stability improves gradually. Avoid risky investments.\n\nMarriage: Positive relationship phase ahead. Communication is important.\n\nHealth: Focus on stress management and routine health care.\n\nRemedies: Chant Gayatri Mantra daily and wear clean yellow on Thursdays.\n\n5-Year Forecast: 2026–2030 shows steady progress with better income and career stability.`
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
