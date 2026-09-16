export class JavaScriptAlertsPage {

  constructor(page) {
    this.page = page;

    this.alertButton = page.getByRole('button', {
      name: 'Click for JS Alert'
    });

    this.confirmButton = page.getByRole('button', {
      name: 'Click for JS Confirm'
    });

    this.promptButton = page.getByRole('button', {
      name: 'Click for JS Prompt'
    });

    this.result = page.locator('#result');
  }

  async open() {
    await this.page.goto(
      'https://the-internet.herokuapp.com/javascript_alerts'
    );
  }

  async handleAlert() {

    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.alertButton.click();
  }

  async acceptConfirm() {

    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.confirmButton.click();
  }

  async dismissConfirm() {

    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });

    await this.confirmButton.click();
  }

  async enterPrompt(value) {

    this.page.once('dialog', async dialog => {
      await dialog.accept(value);
    });

    await this.promptButton.click();
  }
}