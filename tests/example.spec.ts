import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/login');
  await page.waitForLoadState('networkidle')

});



