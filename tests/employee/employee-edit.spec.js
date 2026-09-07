import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage.js';
import { EmployeePage } from '../../pages/EmployeePage.js';

import users from '../../test-data/users.json';

test('edit existing employee', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const employeePage = new EmployeePage(page);

  await loginPage.loginAsAdmin(
    users.admin.username,
    users.admin.password
  );

  await employeePage.openEmployeeList();

  await employeePage.searchEmployee('John');

  await employeePage.editEmployee();

  await expect(
    page.getByText('Successfully Updated')
  ).toBeVisible();
});