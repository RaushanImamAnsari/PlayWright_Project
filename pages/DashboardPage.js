export class DashboardPage {

  constructor(page) {
    this.page = page;

    this.dashboardHeading = page.getByRole('heading', {
      name: 'Dashboard'
    });

    this.timeAtWork = page.getByText('Time at Work');
    this.myActions = page.getByText('My Actions');
    this.quickLaunch = page.getByText('Quick Launch');

    this.profilePicture = page.getByAltText('profile picture');
    this.logoutButton = page.getByText('Logout', { exact: true });
  }

  async verifyDashboard() {
    await this.dashboardHeading.waitFor();
  }

  async logout() {
    await this.profilePicture.click();
    await this.logoutButton.click();
  }
}