import { Page } from "@playwright/test";
import { LoginPage } from "./login_page";

export class App {
    page: Page
    loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
    }
    
}