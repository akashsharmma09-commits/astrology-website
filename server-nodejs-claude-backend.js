const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Astrology API is running successfully"
  });
});
app.post("/generate-report", (req, res) => {
  const { fullName, dob, tob, pob } = req.body;

  const report = `
FULL PREMIUM ASTROLOGY REPORT FOR ${fullName}

━━━━━━━━━━━━━━━━━━
BIRTH DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${fullName}
Date of Birth: ${dob}
Time of Birth: ${tob}
Place of Birth: ${pob}

━━━━━━━━━━━━━━━━━━
CAREER PREDICTION
━━━━━━━━━━━━━━━━━━

Your horoscope shows strong leadership qualities.
Career growth becomes stronger after age 28.
Business, management, and leadership roles are highly favorable.

━━━━━━━━━━━━━━━━━━
WEALTH PREDICTION
━━━━━━━━━━━━━━━━━━

Financial stability improves steadily.
Long-term investments and property gains are strong.

━━━━━━━━━━━━━━━━━━
MARRIAGE PREDICTION
━━━━━━━━━━━━━━━━━━

Marriage may happen after emotional maturity.
Partner will be supportive and practical in nature.

━━━━━━━━━━━━━━━━━━
LOVE LIFE
━━━━━━━━━━━━━━━━━━

Strong emotional bonding period starts after major life stability.

━━━━━━━━━━━━━━━━━━
HEALTH PREDICTION
━━━━━━━━━━━━━━━━━━

Focus on stress management, sleep balance, and daily routine.

━━━━━━━━━━━━━━━━━━
LUCKY FACTORS
━━━━━━━━━━━━━━━━━━

Lucky Number: 3, 5, 9
Lucky Color: Yellow, White
Lucky Day: Thursday

━━━━━━━━━━━━━━━━━━
REMEDIES
━━━━━━━━━━━━━━━━━━

• Gayatri Mantra daily
• Thursday ko yellow daan
• Surya ko jal chadhayein

━━━━━━━━━━━━━━━━━━
5 YEAR FORECAST
━━━━━━━━━━━━━━━━━━

2026 → Career rise
2027 → Wealth improvement
2028 → Relationship stability
2029 → Property gains
2030 → Financial success
`;

  res.json({
    success: true,
    report: report
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
