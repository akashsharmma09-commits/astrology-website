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
  const { fullName } = req.body;

  res.json({
    success: true,
    report: `
FULL PREMIUM ASTROLOGY REPORT FOR ${fullName}

━━━━━━━━━━━━━━━━━━
CAREER PREDICTION
━━━━━━━━━━━━━━━━━━

2026 se career me strong growth dikh rahi hai.
Promotion ke yog strong hain.
Job switch beneficial ho sakta hai.

━━━━━━━━━━━━━━━━━━
WEALTH PREDICTION
━━━━━━━━━━━━━━━━━━

Financial stability improve hogi.
Property investment beneficial ho sakta hai.

━━━━━━━━━━━━━━━━━━
MARRIAGE PREDICTION
━━━━━━━━━━━━━━━━━━

Marriage stable aur positive rahegi.
Partner supportive nature ka hoga.

━━━━━━━━━━━━━━━━━━
LOVE LIFE
━━━━━━━━━━━━━━━━━━

2026–2027 strong relationship period hai.

━━━━━━━━━━━━━━━━━━
HEALTH PREDICTION
━━━━━━━━━━━━━━━━━━

Stress management aur sleep pe focus karein.

━━━━━━━━━━━━━━━━━━
FOREIGN SETTLEMENT
━━━━━━━━━━━━━━━━━━

Foreign travel aur career opportunities strong hain.

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
`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
