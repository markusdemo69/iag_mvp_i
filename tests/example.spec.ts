import { test, expect, request } from '@playwright/test';
import { App } from '../pages/App';
import { Api } from '../pages/Api';

test('Login test', async ({ page }) => {
  const app = new App(page)
  await page.goto('/login');
  await page.waitForLoadState('networkidle')
  await app.loginPage.inputLoginCredentials(`iagpmrole@yahoo.com`, `Second@123`)
  await page.locator('[placeholder="Filter"]').fill('batch2automation')
  await page.waitForLoadState('networkidle')
  await page.keyboard.press('Enter')
  await page.locator('//mat-cell[contains(text(),"batch2automation")]').waitFor({state: "visible"})
  await page.locator('[mattooltip="Edit Project"]').click()
  await page.waitForLoadState('networkidle')
  await page.locator('//*[text()="Reading"]').click()
  await page.waitForLoadState('networkidle')
  await page.locator('//*[text()=" Add a Reading to the list "]/..').click()
  await page.waitForLoadState('networkidle')
  await page.locator('[role="listbox"]').click()
  await page.locator('//span[text()=" HEEL "]').click()



});





