import { test, expect } from '../../fixtures/test-fixtures.js';

import { EmployeePage } from '../../pages/EmployeePage.js';

test('search employee from employee list', async ({ loggedInPage }) => {

  const employeePage = new EmployeePage(loggedInPage);

  await employeePage.openEmployeeList();

  await expect(
    employeePage.employeeInformationHeading
  ).toBeVisible();

  await employeePage.searchEmployee('Peter');

});