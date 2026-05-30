import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/');
    await page.getByText('Playwright, AI Testing &').click();
    await page.getByText('85%', { exact: true }).click();
    await page.getByText('85%', { exact: true }).click();
    await expect(page.getByText('85%', { exact: true })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Playwright, AI Testing & Selenium');
    await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Playwright, AI Testing & Selenium Master All 3 Tracks" [level=1]`);
});

//=================//