import { Page } from "@playwright/test";

export class LoginPage {

//     private readonly inputBox: Locator;
//   private readonly todoItems: Locator;

//   constructor(public readonly page: Page) {
//     this.inputBox = this.page.locator('input.new-todo');
//     this.todoItems = this.page.getByTestId('todo-item');
//   }

    constructor(readonly page: Page) {}

    public async navigateToLoginPage() : Promise<void> {
        const baseURL = process.env.URL || 'No URL set';
        console.log(`Navigating to Login Page: ${baseURL}/login`);
        await this.page.goto('/login', {
            waitUntil: 'domcontentloaded'
        });
    }

}