// Example Hook file (e.g., src/hooks/hooks.ts)
import { Before, After, IWorld } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import dotenv from "dotenv";
import { LoginPage } from "../pages/loginPage";
import { Homepage } from "../pages/homePage";

dotenv.config();

// Augment the World object type to include the Playwright page and browser
declare module "@cucumber/cucumber" {
  interface IWorld {
    browser: Browser;
    page: Page;
    homePage: Homepage;
    loginPage: LoginPage;
  }
}

Before(async function (this: IWorld) {
  // Launch a new browser instance before each scenario
  this.browser = await chromium.launch({ headless: true });
  
  // Create a new page instance before each scenario
  this.page = await this.browser.newPage({
    baseURL: process.env.URL || ''
  });

  this.homePage = new Homepage(this.page);
  this.loginPage = new LoginPage(this.page);
});

After(async function (this: IWorld) {
  // Close the browser and page after each scenario
  if (this.browser) {
    await this.browser.close();
  }
});