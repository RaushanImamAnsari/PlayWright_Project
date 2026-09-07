export class EmployeePage {

  constructor(page) {
    this.page = page;

    // PIM menu
    this.pimMenu =
      page.getByRole('link', { name: 'PIM' });

    // Employee Information heading
    this.employeeInformationHeading =
      page.getByRole('heading', {
        name: 'Employee Information'
      });

    // Employee Name search field
    this.employeeNameInput =
      page.getByPlaceholder('Type for hints...').first();

    // Search button
    this.searchButton =
      page.getByRole('button', {
        name: 'Search'
      });

    // Add Employee
    this.addEmployeeButton =
      page.getByRole('link', {
        name: 'Add Employee'
      });

    // Add Employee heading
    this.addEmployeeHeading =
      page.getByRole('heading', {
        name: 'Add Employee'
      });

    // Create Employee fields
    this.firstNameInput =
      page.getByPlaceholder('First Name');

    this.middleNameInput =
      page.getByPlaceholder('Middle Name');

    this.lastNameInput =
      page.getByPlaceholder('Last Name');

    // Save button
    this.saveButton =
      page.getByRole('button', {
        name: 'Save'
      });
  }

  // Open Employee List
  async openEmployeeList() {

    await this.pimMenu.click();

    await this.employeeInformationHeading.waitFor();
  }

  // Search Employee
  async searchEmployee(name) {

    await this.employeeNameInput.fill(name);

    await this.searchButton.click();
  }

  // Open Add Employee
  async openAddEmployee() {

    await this.addEmployeeButton.click();

    await this.addEmployeeHeading.waitFor();
  }

  // Create Employee
  async createEmployee(firstName, middleName, lastName) {

    await this.firstNameInput.fill(firstName);

    await this.middleNameInput.fill(middleName);

    await this.lastNameInput.fill(lastName);

    await this.saveButton.click();
  }
}