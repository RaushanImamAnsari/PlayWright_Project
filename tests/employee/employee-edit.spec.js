import { test, expect } from '../../fixtures/test-fixtures.js';

import { EmployeePage } from '../../pages/EmployeePage.js';

test('edit existing employee', async ({ loggedInPage }) => {

  const employeePage = new EmployeePage(loggedInPage);

  await employeePage.openEmployeeList();

  await employeePage.searchEmployee('John');

  await employeePage.editEmployee();

  await expect(
    loggedInPage.getByText('Successfully Updated')
  ).toBeVisible();

});