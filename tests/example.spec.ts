import { test, expect, request } from '@playwright/test';
import { App } from '../pages/App';
import { Api } from '../pages/Api';

test('Login test', async ({ page }) => {
  const app = new App(page)
  await page.goto('/login');
  await page.waitForLoadState('networkidle')
  await app.loginPage.inputLoginCredentials(`${process.env.USER_EMAIL}`, `${process.env.USER_PASSWORD}`)
});





