export class DashboardPage {

  constructor(page) {
    this.page = page;

    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.sideNavigation = page.locator('.oxd-main-menu');
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.timeAtWork = page.getByText('Time at Work');
    this.myActions = page.getByText('My Actions');
    this.quickLaunch = page.getByText('Quick Launch');
    this.assignLeaveQuickLaunch = page.getByText('Assign Leave', { exact: true });

    this.profilePicture = page.getByAltText('profile picture');
    this.logoutButton = page.getByText('Logout', { exact: true });
  }

  async openPim() {
    await this.pimMenu.click();
  }

  async logout() {
    await this.profilePicture.click();
    await this.logoutButton.click();
  }
}
