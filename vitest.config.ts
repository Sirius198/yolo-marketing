/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

// https://www.eternaldev.com/blog/testing-a-react-application-with-vitest/
export default defineConfig({
  test: {
    testTimeout: 30000,
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setupTests.ts',
    // silent: true,
    // reporters: 'verbose',
  },
});
