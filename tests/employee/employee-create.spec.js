import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage.js';
import { EmployeePage } from '../../pages/EmployeePage.js';

import users from '../../test-data/users.json';

test('create new employee', async ({ page }) => {

  // Create page objects
  const loginPage = new LoginPage(page);
  const employeePage = new EmployeePage(page);

  // Login
  await loginPage.loginAsAdmin(
    users.admin.username,
    users.admin.password
  );

  // Open PIM
  await employeePage.openEmployeeList();

  // Open Add Employee
  await employeePage.openAddEmployee();

  // Create employee
  await employeePage.createEmployee(
    'John',
    'William',
    'Smith'
  );

  // Verify employee was created
  await expect(
    page.getByText('Successfully Saved')
  ).toBeVisible();
});