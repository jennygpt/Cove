# Cove MCP Server

**Your real-world voice agent.**
Spotify, weather, traffic, camera, and pure attitude.

This repository now uses **Next.js** with an API route that mirrors the original Express server.

## Setup

1. Clone this repo, `cd cove-mcp-server`
2. `npm install`
3. Copy `.env.example` to `.env` and fill in your API keys
4. `npm run dev` to start the development server
5. POST to `http://localhost:3000/api/mcp` (see example below)

## Example Request

```bash
curl -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -d '{"tool": "weather", "parameters": {"location": "West Vancouver"}}'
```
