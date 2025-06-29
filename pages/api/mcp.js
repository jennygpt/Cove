// pages/api/mcp.js

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "spotifyNowPlaying",
      description: "Returns the currently playing track on Jenny's Spotify.",
      type: "streamable_http",
      url: "https://spotifynowplaying-olbjl5wcvq-uc.a.run.app"
    },
    {
      name: "weatherNow",
      description: "Returns the current weather in West Vancouver.",
      type: "streamable_http",
      url: "https://weathernow-olbjl5wcvq-uc.a.run.app"
    },
    {
      name: "trafficToStore",
      description: "Estimates traffic time to Walmart or Save-On-Foods.",
      type: "streamable_http",
      url: "https://traffictostore-olbjl5wcvq-uc.a.run.app"
    },
    {
      name: "blinkStatus",
      description: "Returns the latest motion event from your Blink camera.",
      type: "streamable_http",
      url: "https://blinkstatus-olbjl5wcvq-uc.a.run.app"
    }
  ]);
}
