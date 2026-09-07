import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage.js';
import { EmployeePage } from '../../pages/EmployeePage.js';

import users from '../../test-data/users.json';

test('search employee from employee list', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const employeePage = new EmployeePage(page);

  await loginPage.loginAsAdmin(
    users.admin.username,
    users.admin.password
  );

  await employeePage.openEmployeeList();

  await expect(
    employeePage.employeeInformationHeading
  ).toBeVisible();

  await employeePage.searchEmployee('Peter');

});