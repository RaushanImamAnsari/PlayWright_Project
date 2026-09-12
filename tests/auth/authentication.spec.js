import { test, expect } from '../../fixtures/test-fixtures.js';
import users from '../../test-data/users.json';

test.describe('Authentication', () => {
  test('logs in with valid administrator credentials', async ({ page, loginPage, dashboardPage }) => {

    await loginPage.loginAsAdmin(users.admin.username, users.admin.password);
    await expect(page).toHaveURL(/dashboard/);
    await expect(dashboardPage.dashboardHeading).toBeVisible();
    
  });

  test('shows an error for an invalid password', async ({ loginPage }) => {
    await loginPage.loginAsAdmin(users.admin.username, 'incorrect-password');
    await expect(loginPage.invalidCredentialsError).toBeVisible();
  });

  test('validates both required credentials', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.submitEmptyLogin();
    await expect(loginPage.requiredFieldErrors).toHaveCount(2);
  });

  test('logs out and blocks dashboard access', async ({ loggedInPage, dashboardPage, loginPage }) => {
    await dashboardPage.logout();
    await expect(loginPage.usernameInput).toBeVisible();
    await loggedInPage.goto('/web/index.php/dashboard/index');
    await expect(loginPage.usernameInput).toBeVisible();
  });
});
