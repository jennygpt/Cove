import { defineFunction } from '@genkit-ai/core';

export const trafficToStore = defineFunction({
  name: 'trafficToStore',
  run: async () => {
    return {
      toWalmart: 'Approx. 18 minutes',
      toSaveOnFoods: 'Approx. 15 minutes',
      note: 'Traffic is moderate. Both stores are reachable within 20 minutes.'
    };
  },
});
