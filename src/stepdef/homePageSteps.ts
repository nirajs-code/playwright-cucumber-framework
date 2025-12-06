import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given('I navigate to the home page', async function () {
    await this.homePage.navigateToHomePage();
    await this.homePage.acceptCookies();
});

Then('the page title should be {string}', async function (expectedTitle: string) {
  await expect(this.page).toHaveTitle(expectedTitle);
});