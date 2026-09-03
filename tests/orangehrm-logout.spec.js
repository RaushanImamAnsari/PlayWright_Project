// @ts-check
import { test, expect } from '@playwright/test';

test('successful OrangeHRM logout', async ({ page }) => {

  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Login
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Open user menu
  await page.getByAltText('profile picture').click();

  // Click Logout
  await page.getByText('Logout').click();

  // Verify user is back on login page
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
});