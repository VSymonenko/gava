import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      exclude: ['**/index.ts', ...coverageConfigDefaults.exclude],
      enabled: true,
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      }
    },
  },
});
