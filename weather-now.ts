import { defineFunction } from '@genkit-ai/core';
import axios from 'axios';

export const weatherNow = defineFunction({
  name: 'weatherNow',
  run: async () => {
    const res = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=49.328&longitude=-123.194&current_weather=true'
    );

    const data = res.data.current_weather;
    return {
      temperature: `${data.temperature}°C`,
      windspeed: `${data.windspeed} km/h`,
      weather: `It's ${data.temperature}°C with ${data.windspeed} km/h wind.`
    };
  },
});
