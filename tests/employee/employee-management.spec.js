import { test, expect } from '../../fixtures/test-fixtures.js';
import { buildEmployee } from '../../utils/employee-factory.js';

test.describe('PIM employee management', () => {
  test('creates an employee with a unique name', async ({ employeePage }) => {
    const employee = buildEmployee();
    await employeePage.openEmployeeList();
    await employeePage.openAddEmployee();
    await employeePage.createEmployee(employee);
    await expect(employeePage.successMessage).toContainText('Successfully Saved');
  });

  test('requires first and last name when adding an employee', async ({ employeePage }) => {
    await employeePage.openEmployeeList();
    await employeePage.openAddEmployee();
    await employeePage.saveButton.click();
    await expect(employeePage.requiredFieldErrors).toHaveCount(2);
  });

  test('cancels adding an employee and returns to the employee list', async ({ employeePage }) => {
    await employeePage.openEmployeeList();
    await employeePage.openAddEmployee();
    await employeePage.cancelButton.click();
    await expect(employeePage.employeeInformationHeading).toBeVisible();
  });

  test('finds a newly created employee by name', async ({ employeePage }) => {
    const employee = buildEmployee();
    await employeePage.openEmployeeList();
    await employeePage.openAddEmployee();
    await employeePage.createEmployee(employee);
    await employeePage.openEmployeeList();
    await employeePage.searchByName(`${employee.firstName} ${employee.lastName}`);
    await expect(employeePage.employeeRow(employee.firstName)).toBeVisible();
  });

  test('finds John by the Employee ID assigned during creation', async ({ employeePage }) => {
    const john = buildEmployee({ firstName: 'John', lastName: `Test${Date.now()}` });
    await employeePage.openEmployeeList();
    await employeePage.openAddEmployee();
    await employeePage.createEmployee(john);
    await expect(employeePage.successMessage).toContainText('Successfully Saved');

    await employeePage.openEmployeeList();
    await employeePage.searchByEmployeeId(john.employeeId);
    await expect(employeePage.employeeRow(john.employeeId)).toContainText('John');
  });

  test('shows no records for an unknown employee name', async ({ employeePage }) => {
    await employeePage.openEmployeeList();
    await employeePage.searchForMissingEmployee(`Missing${Date.now()}`);
    await expect(employeePage.noRecordsFound).toBeVisible();
  });

  test('resets an employee name search filter', async ({ employeePage }) => {
    await employeePage.openEmployeeList();
    await employeePage.searchForMissingEmployee(`Missing${Date.now()}`);
    await expect(employeePage.noRecordsFound).toBeVisible();
    await employeePage.resetButton.click();
    await expect(employeePage.employeeNameInput).toHaveValue('');
  });

  test('updates an employee ID and persists the change', async ({ employeePage }) => {
    const employee = buildEmployee();
    const updatedEmployeeId = `9${employee.employeeId.slice(1)}`;
    await employeePage.openEmployeeList();
    await employeePage.openAddEmployee();
    await employeePage.createEmployee(employee);
    await expect(employeePage.successMessage).toContainText('Successfully Saved');
    await employeePage.openEmployeeList();
    await employeePage.searchByName(`${employee.firstName} ${employee.lastName}`);
    await employeePage.editEmployeeId(employee.firstName, updatedEmployeeId);
    await expect(employeePage.successMessage).toContainText('Successfully Updated');
    await employeePage.openEmployeeList();
    await employeePage.searchByEmployeeId(updatedEmployeeId);
    await expect(employeePage.employeeRow(updatedEmployeeId)).toBeVisible();
  });
});
