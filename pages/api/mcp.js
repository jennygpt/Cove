import { getSpotifySong } from '../../utils/spotify';
import { getWeather } from '../../utils/weather';
import { getTraffic } from '../../utils/traffic';
import { getBlinkStatus } from '../../utils/blink';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tool, query, parameters } = req.body;
  let result = '';
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
        result = 'Unknown tool. Try again, reina.';
    }
    return res.status(200).json({ tool, response: result, data });
  } catch (e) {
    return res.status(500).json({
      tool,
      response: 'Error processing your request.',
      error: e.toString(),
    });
  }
}
