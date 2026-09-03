// // @ts-check
// import { test, expect } from '@playwright/test';

// test('search employee from employee list', async ({ page }) => {

//   // Open OrangeHRM
//   await page.goto('https://opensource-demo.orangehrmlive.com/');

//   // Login
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();

//   // Navigate to Employee List
//   await page.getByRole('link', { name: 'PIM' }).click();

//   // Verify Employee Information page
//   await expect(
//     page.getByRole('heading', { name: 'Employee Information' })
//   ).toBeVisible();

//   // Enter employee name
//   await page.getByPlaceholder('Type for hints...').first().fill('Peter');

//   // Select employee from autocomplete
//   await page.getByText('Peter', { exact: true }).click();

//   // Search employee
//   await page.getByRole('button', { name: 'Search' }).click();

//   // Verify search result
//   await expect(
//     page.getByText('Peter', { exact: true })
//   ).toBeVisible();
// });