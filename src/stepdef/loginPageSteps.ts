import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(30000);

  When('I click on Account and Lists', async function () {
    await this.loginPage.clickAccountAndLists();
});

When('I click on Sign-In', async function () {
  await this.loginPage.clickSignIn();
});

Then('I should see the Sign-In page', async function () {
  const isVisible = await this.loginPage.isSignInHeadingVisible();
  expect(isVisible).toBe(true);
});