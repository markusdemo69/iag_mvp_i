import { APIRequestContext } from "@playwright/test";

export class Api {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext

    }
    
}