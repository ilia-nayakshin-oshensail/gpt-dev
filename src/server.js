const express = require('express');
const { fetchDatabase, fetchPage } = require('./notionApi');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Notion demo server');
});

app.get('/database/:id', async (req, res) => {
  try {
    const data = await fetchDatabase(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/page/:id', async (req, res) => {
  try {
    const data = await fetchPage(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
