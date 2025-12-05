import { When } from "@cucumber/cucumber";

When('I navigate to the login page', async function () {
  await this.loginPage.navigateToLoginPage();
});