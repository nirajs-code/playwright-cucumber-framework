import { Locator, Page } from '@playwright/test';


interface Locators {
    getStartedLink: Locator;
    heading: Locator;
    headerNavLinks: (linkText: string) => Locator;
}

export class Homepage {

    constructor(readonly page: Page) {}

    public locators(): Locators  {
        return {

            getStartedLink: this.page.getByRole("link", { name: "Get Started" }),

            heading: this.page.getByRole("heading", { name: 'Installation' }),

            headerNavLinks: (linkText: string) => {
                return this.page.getByRole("heading", { name: '${linkText}' });
        },
        };
    }

    public async navigateToHomePage() : Promise<void> {
        console.log("Navigating to Home Page: " + process.env.URL);
        await this.page.goto("https://www.amazon.co.uk/", {
            waitUntil: 'domcontentloaded'
        });
    }

}