import { test, expect } from '../../fixtures/test-fixtures.js';

test.describe('Dashboard', () => {
  test('shows the key dashboard widgets', async ({ loggedInPage, dashboardPage }) => {
    await expect(loggedInPage).toHaveURL(/dashboard/);
    await expect(dashboardPage.dashboardHeading).toBeVisible();
    await expect(dashboardPage.timeAtWork).toBeVisible();
    await expect(dashboardPage.myActions).toBeVisible();
    await expect(dashboardPage.quickLaunch).toBeVisible();
  });

  test('shows the application sidebar navigation', async ({ loggedInPage, dashboardPage }) => {
    await expect(dashboardPage.sideNavigation).toBeVisible();
    await expect(dashboardPage.pimMenu).toBeVisible();
  });

  test('navigates to Employee Information from the PIM sidebar item', async ({ loggedInPage, dashboardPage, employeePage }) => {
    await dashboardPage.openPim();
    await expect(employeePage.employeeInformationHeading).toBeVisible();
  });

  test('keeps the dashboard available after refresh', async ({ loggedInPage, dashboardPage }) => {
    await loggedInPage.reload();
    await expect(dashboardPage.dashboardHeading).toBeVisible();
    await expect(dashboardPage.assignLeaveQuickLaunch).toBeVisible();
  });
});
