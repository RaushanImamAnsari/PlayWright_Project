import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  testDir: './tests',

  // The public demo is shared and the PIM tests create records, so keep runs isolated.
  fullyParallel: true,
  workers: 4,
  retries: 0,

  timeout: 60000,

  expect: {
    timeout: 10000
  },

  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: process.env.BASE_URL,

    headless: true,

    launchOptions: {
      args: ['--start-maximized']
    },

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox']
    //   }
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari']
    //   }
    // }
  ]
});
