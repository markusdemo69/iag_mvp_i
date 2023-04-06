import { Page } from "@playwright/test";
import { LoginPage } from "./login_page";
import { DashboardPage } from "./dashboard_page";

export class App {
    page: Page
    loginPage: LoginPage;
    dashboardPage: DashboardPage;

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
    }
    
}