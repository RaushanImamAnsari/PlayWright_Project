import { test, expect } from '@playwright/test';
import { JavaScriptAlertsPage } from '../../pages/JavaScriptAlertsPage.js';

test.describe('JavaScript Dialogs', () => {

  test('handles alert', async ({ page }) => {

    const alertsPage = new JavaScriptAlertsPage(page);

    await alertsPage.open();
    await alertsPage.handleAlert();

    await expect(alertsPage.result)
      .toHaveText('You successfully clicked an alert');
  });


  test('accepts confirmation dialog', async ({ page }) => {

    const alertsPage = new JavaScriptAlertsPage(page);

    await alertsPage.open();
    await alertsPage.acceptConfirm();

    await expect(alertsPage.result)
      .toHaveText('You clicked: Ok');
  });


  test('dismisses confirmation dialog', async ({ page }) => {

    const alertsPage = new JavaScriptAlertsPage(page);

    await alertsPage.open();
    await alertsPage.dismissConfirm();

    await expect(alertsPage.result)
      .toHaveText('You clicked: Cancel');
  });


  test('handles prompt dialog', async ({ page }) => {

    const alertsPage = new JavaScriptAlertsPage(page);

    await alertsPage.open();
    await alertsPage.enterPrompt('Sam');

    await expect(alertsPage.result)
      .toHaveText('You entered: Sam');
  });

});