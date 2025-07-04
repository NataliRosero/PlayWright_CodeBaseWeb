// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  name: 'chromium',
  use: {
      headless:false, //para que se vea abrir el navegado mientras se automatiza
      viewport: { width: 1920, height: 1080 }, // desktop
      video: 'on',
      screenshot: 'only-on-failure',
      launchOptions: {
        args: ['--start-maximized'],
      },
    trace: 'on-first-retry',
    
  },

  /* Configure projects for major browsers */
  projects: [
   
    {
      name: 'chromium-maximized',
      use: {
        headless: false,
        viewport: null, // permite usar tamaño real del navegador
        launchOptions: {
          args: ['--start-maximized'], // maximiza ventana real
        },
        trace: 'on-first-retry',
      },
    },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
});