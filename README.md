# Cove MCP Server

**Your real-world voice agent.**
Spotify, weather, traffic, camera, and pure attitude.

## Setup

1. Clone this repo, `cd cove-mcp-server`
2. `npm install`
3. Copy `.env` file and ensure all your API keys are set
4. `node index.js` (or `npm start`)
5. POST to `http://localhost:3000/mcp` (see example below)

## Example Request

```bash
curl -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -d '{"tool": "weather", "parameters": {"location": "West Vancouver"}}'
```
