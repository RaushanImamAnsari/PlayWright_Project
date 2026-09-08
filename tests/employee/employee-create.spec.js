import { test, expect } from '../../fixtures/test-fixtures.js';

import { EmployeePage } from '../../pages/EmployeePage.js';

test('create new employee', async ({ loggedInPage }) => {

  const employeePage = new EmployeePage(loggedInPage);

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
    loggedInPage.getByText('Successfully Saved')
  ).toBeVisible();

});