require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { getSpotifySong } = require('./utils/spotify');
const { getWeather } = require('./utils/weather');
const { getTraffic } = require('./utils/traffic');
const { getBlinkStatus } = require('./utils/blink');
const app = express();
app.use(bodyParser.json());

app.post('/mcp', async (req, res) => {
  const { tool, query, parameters } = req.body;
  let result = "";
  let data = {};

  try {
    switch (tool) {
      case 'spotify':
        result = await getSpotifySong(query);
        break;
      case 'weather':
        result = await getWeather(parameters?.location || 'West Vancouver');
        break;
      case 'traffic':
        result = await getTraffic(parameters?.destination || 'Walmart');
        break;
      case 'blink':
        result = await getBlinkStatus();
        break;
      default:
        result = "Unknown tool. Try again, reina.";
    }
    res.json({ tool, response: result, data });
  } catch (e) {
    res.status(500).json({ tool, response: "Error processing your request.", error: e.toString() });
  }
});

app.listen(3000, () => {
  console.log('Cove MCP server listening on port 3000');
});
