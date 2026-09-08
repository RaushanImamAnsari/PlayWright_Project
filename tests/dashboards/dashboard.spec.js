import { test, expect } from '../../fixtures/test-fixtures.js';

import { DashboardPage } from '../../pages/DashboardPage.js';

test('verify OrangeHRM dashboard', async ({ loggedInPage }) => {

  const dashboardPage = new DashboardPage(loggedInPage);

  await expect(loggedInPage).toHaveURL(/dashboard/);

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