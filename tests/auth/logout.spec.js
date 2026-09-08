import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { DashboardPage } from '../../pages/DashboardPage.js';
import users from '../../test-data/users.json';

test('successful OrangeHRM logout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.loginAsAdmin(
    users.admin.username,
    users.admin.password
  );

  await dashboardPage.logout();

  await expect( loginPage.usernameInput ).toBeVisible();

  await expect( loginPage.passwordInput ).toBeVisible();
  
});