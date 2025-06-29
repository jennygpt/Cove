import { defineFunction } from '@genkit-ai/core';

export const blinkStatus = defineFunction({
  name: 'blinkStatus',
  run: async () => {
    return {
      camera: 'Front Door',
      last_motion: '2 hours ago',
      status: 'All quiet outside. No recent motion detected.'
    };
  },
});
