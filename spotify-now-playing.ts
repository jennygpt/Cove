import { defineFunction } from '@genkit-ai/core';
import axios from 'axios';

export const spotifyNowPlaying = defineFunction({
  name: 'spotifyNowPlaying',
  run: async () => {
    const tokenRes = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = tokenRes.data.access_token;

    const nowPlayingRes = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    );

    if (!nowPlayingRes.data || !nowPlayingRes.data.item) {
      return { message: 'No track currently playing.' };
    }

    const track = nowPlayingRes.data.item.name;
    const artist = nowPlayingRes.data.item.artists[0].name;

    return {
      track,
      artist,
      message: `You're listening to ${track} by ${artist}.`
    };
  },
});
