export class EmployeePage {
  constructor(page) {
    this.page = page;
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.employeeInformationHeading = page.getByRole('heading', { name: 'Employee Information' });
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
    this.addEmployeeHeading = page.getByRole('heading', { name: 'Add Employee' });
    this.employeeNameInput = page.getByPlaceholder('Type for hints...').first();
    this.employeeIdInput = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.saveButton = page.getByRole('button', { name: 'Save' }).first();
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.requiredFieldErrors = page.locator('.oxd-input-field-error-message');
    this.noRecordsFound = page.getByText('No Records Found');
    this.successMessage = page.locator('.oxd-toast-content');
  }

  employeeRow(value) {
    return this.page.getByRole('row').filter({ hasText: value });
  }

  async openEmployeeList() {
    await this.page.goto('/web/index.php/pim/viewEmployeeList');
    await this.employeeInformationHeading.waitFor();
  }

  async openAddEmployee() {
    await this.page.goto('/web/index.php/pim/addEmployee');
    await this.addEmployeeHeading.waitFor();
  }

  async createEmployee({ firstName, middleName = '', lastName, employeeId }) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);

    if (employeeId) {
      await this.employeeIdInput.fill(employeeId);
    }

    await this.saveButton.click();
  }

  async searchByName(name) {
    await this.employeeNameInput.fill(name);
    const suggestion = this.page.locator('.oxd-autocomplete-option').filter({ hasText: name }).first();
    await suggestion.waitFor();
    await suggestion.click();
    await this.searchButton.click();
  }

  async searchByEmployeeId(employeeId) {
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  async searchForMissingEmployee(name) {
    await this.employeeNameInput.fill(name);
    await this.searchButton.click();
  }

  async editEmployeeId(name, employeeId) {
    await this.employeeRow(name).getByRole('button').first().click();
    await this.employeeIdInput.fill(employeeId);
    await this.saveButton.click();
  }
}
