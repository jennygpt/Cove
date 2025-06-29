import { defineFunction } from '@genkit-ai/core';
import axios from 'axios';

export const trafficToStore = defineFunction({
  name: 'trafficToStore',
  run: async () => {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const origin = encodeURIComponent("2475 Skilift Rd, West Vancouver, BC");
    const destinations = {
      walmart: encodeURIComponent("925 Marine Dr, North Vancouver, BC"),
      saveOnFoods: encodeURIComponent("1250 Marine Dr, North Vancouver, BC"),
    };

    const getETA = async (destination: string) => {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_API_KEY}`;
      const res = await axios.get(url);
      const route = res.data.routes?.[0];
      const leg = route?.legs?.[0];

      if (!leg) {
        return "Route unavailable";
      }

      return leg.duration.text;
    };

    const etaWalmart = await getETA(destinations.walmart);
    const etaSaveOn = await getETA(destinations.saveOnFoods);

    return {
      toWalmart: etaWalmart,
      toSaveOnFoods: etaSaveOn,
      note: "Real-time traffic pulled from Google Maps."
    };
  },
});
