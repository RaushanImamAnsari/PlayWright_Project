import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { EmployeePage } from '../pages/EmployeePage.js';
import users from '../test-data/users.json';

export const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  employeePage: async ({ loggedInPage }, use) => {
    await use(new EmployeePage(loggedInPage));
  },

  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.loginAsAdmin( users.admin.username, users.admin.password );
    await page.waitForURL(/dashboard/);
    await dashboardPage.dashboardHeading.waitFor();

    await use(page);
  }

});

export { expect } from '@playwright/test';
