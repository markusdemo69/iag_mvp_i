import { APIRequestContext } from "@playwright/test";
import { LoginApiPage } from "./api_login_page";

export class Api {
    apiContext: any
    loginPage: LoginApiPage;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new LoginApiPage(apiContext)

    }
    
}