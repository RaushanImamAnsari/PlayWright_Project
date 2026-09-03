// @ts-check
import { test, expect } from '@playwright/test';

test('verify OrangeHRM dashboard', async ({ page }) => {

    // Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify Dashboard URL
    await expect(page).toHaveURL(/dashboard/);

    // Verify Dashboard heading
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Verify Time at Work section
    await expect(page.getByText('Time at Work')).toBeVisible();

    // Verify My Actions section
    await expect(page.getByText('My Actions')).toBeVisible();

    // Verify Quick Launch section
    await expect(page.getByText('Quick Launch')).toBeVisible();
});