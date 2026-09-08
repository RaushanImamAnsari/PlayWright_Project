import { test, expect } from '../fixtures/test-fixtures.js';

test('dashboard using fixture', async ({
  loggedInPage
}) => {

  await expect(  loggedInPage
      .getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

});