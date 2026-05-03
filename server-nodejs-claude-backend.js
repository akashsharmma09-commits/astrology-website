app.post("/generate-report", (req, res) => {
  const { fullName, dob, timeOfBirth, placeOfBirth } = req.body;

  res.json({
    success: true,
    report: `
FULL PREMIUM ASTROLOGY REPORT FOR ${fullName}

━━━━━━━━━━━━━━━━━━
CAREER PREDICTION
━━━━━━━━━━━━━━━━━━

2026 se career me strong growth dikh rahi hai.
Promotion ke yog strong hain.
Government, IT, Business, Management aur Consultancy fields favorable rahengi.
Job switch 2026–2027 me beneficial ho sakta hai.

━━━━━━━━━━━━━━━━━━
WEALTH PREDICTION
━━━━━━━━━━━━━━━━━━

Financial stability gradually improve hogi.
Property investment beneficial ho sakta hai.
Risky investment avoid karein.
2027 ke baad strong financial uplift possible hai.

━━━━━━━━━━━━━━━━━━
MARRIAGE PREDICTION
━━━━━━━━━━━━━━━━━━

Marriage life positive rahegi.
Delay ho sakta hai but stable relationship banega.
Communication strong rakhna important hai.
Partner supportive aur practical nature ka ho sakta hai.

━━━━━━━━━━━━━━━━━━
LOVE LIFE
━━━━━━━━━━━━━━━━━━

Emotional attachment strong rahega.
Past relationship lessons future me kaam aayenge.
2026–2027 strong relationship period hai.

━━━━━━━━━━━━━━━━━━
HEALTH PREDICTION
━━━━━━━━━━━━━━━━━━

Stress management zaroori hai.
Sleep cycle improve karein.
Routine health check helpful rahega.
Digestive health aur mental peace pe focus karein.

━━━━━━━━━━━━━━━━━━
FOREIGN SETTLEMENT
━━━━━━━━━━━━━━━━━━

Foreign travel ke yog present hain.
Career related foreign opportunities mil sakti hain.
2026–2028 period especially favorable hai.

━━━━━━━━━━━━━━━━━━
BUSINESS PREDICTION
━━━━━━━━━━━━━━━━━━

Partnership carefully choose karein.
Independent business zyada successful rahega.
Digital, consultancy aur online work profitable ho sakta hai.

━━━━━━━━━━━━━━━━━━
LUCKY FACTORS
━━━━━━━━━━━━━━━━━━

Lucky Number: 3, 5, 9
Lucky Color: Yellow, White
Lucky Day: Thursday, Sunday
Lucky Direction: East

━━━━━━━━━━━━━━━━━━
REMEDIES
━━━━━━━━━━━━━━━━━━

• Gayatri Mantra daily 108 times
• Thursday ko yellow daan
• Surya ko jal chadhayein
• Hanuman Chalisa Tuesday ko
• Clean yellow sapphire after consultation

━━━━━━━━━━━━━━━━━━
5 YEAR FORECAST
━━━━━━━━━━━━━━━━━━

2026 → Career rise  
2027 → Wealth improvement  
2028 → Relationship stability  
2029 → Property gains  
2030 → Strong financial success

Overall life progress positive and stable dikh rahi hai.

━━━━━━━━━━━━━━━━━━
END OF REPORT
━━━━━━━━━━━━━━━━━━
`
  });
});
