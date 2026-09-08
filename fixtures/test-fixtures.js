import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { EmployeePage } from '../pages/EmployeePage.js';
import users from '../test-data/users.json';

export const test = base.extend({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  employeePage: async ({ page }, use) => {

    const employeePage = new EmployeePage(page);

    await use(employeePage);
  },

  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.loginAsAdmin(
      users.admin.username,
      users.admin.password
    );

    await use(page);
  }

});

export { expect } from '@playwright/test';