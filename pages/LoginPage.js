export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.requiredFieldErrors = page.locator('.oxd-input-field-error-message');
    this.invalidCredentialsError = page.getByText('Invalid credentials');
  }

  async open() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAsAdmin(username, password) {
    await this.open();
    await this.login(username, password);
  }

  async submitEmptyLogin() {
    await this.loginButton.click();
  }
}
