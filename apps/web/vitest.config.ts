import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./vitest.setup.ts'],
    include: [
      '**/*.{test,spec}.{js,ts}', // Focus on utility functions, helpers, etc.
      '**/__tests__/**/*.{test,spec}.{js,ts}'
    ],
    exclude: [
      '**/node_modules/**', 
      '**/dist/**', 
      '**/*.{test,spec}.{jsx,tsx}' // Exclude React component tests
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})