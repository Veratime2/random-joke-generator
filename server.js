const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Route to get a random joke
app.get('/api/joke', async (req, res) => {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke', message: error.message });
  }
});

// Route to get a specific category joke
app.get('/api/joke/:category', async (req, res) => {
  const { category } = req.params;
  const validCategories = ['general', 'programming', 'knock-knock'];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: `Invalid category. Use: ${validCategories.join(', ')}` });
  }

  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke', message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🎭 Joke server running at http://localhost:${PORT}`);
});
