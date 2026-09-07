import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { DashboardPage } from '../../pages/DashboardPage.js';
import users from '../../test-data/users.json';

test('verify OrangeHRM dashboard', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.loginAsAdmin(
    users.admin.username,
    users.admin.password
  );

  await expect(page).toHaveURL(/dashboard/);

  await expect(
    dashboardPage.dashboardHeading
  ).toBeVisible();

  await expect(
    dashboardPage.timeAtWork
  ).toBeVisible();

  await expect(
    dashboardPage.myActions
  ).toBeVisible();

  await expect(
    dashboardPage.quickLaunch
  ).toBeVisible();
});