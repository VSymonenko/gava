import { defineConfig, mergeConfig } from 'vitest/config';

import configShared from './../../vitest.config.mts';

export default mergeConfig(configShared, defineConfig({
  test: {
    coverage: {
      exclude: [
        '**/index.ts',
      ],
    },
  },
}));
