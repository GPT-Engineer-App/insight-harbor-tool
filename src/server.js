const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const companyData = {
  'Apple': {
    name: 'Apple Inc.',
    financials: { revenue: 365817000000, profit: 94680000000, growth: 0.08 },
    news: [
      { id: 1, title: 'Apple Announces New iPhone', date: '2023-09-12' },
      { id: 2, title: 'Apple's Services Revenue Hits New Record', date: '2023-08-03' },
    ],
    metrics: { employees: 164000, offices: 25, founded: 1976 },
  },
  'Microsoft': {
    name: 'Microsoft Corporation',
    financials: { revenue: 198270000000, profit: 72361000000, growth: 0.18 },
    news: [
      { id: 1, title: 'Microsoft Expands AI Capabilities', date: '2023-09-21' },
      { id: 2, title: 'Azure Cloud Services See Significant Growth', date: '2023-07-25' },
    ],
    metrics: { employees: 221000, offices: 190, founded: 1975 },
  },
  // Add more companies as needed
};

app.get('/api/company/:name', (req, res) => {
  const companyName = req.params.name;
  const company = companyData[companyName];
  
  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ error: 'Company not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
