import test from "@playwright/test";

test.describe.only('Customer Tests', () => {
  test('Add New Customer', async ({ page }) => {
    // Test code to add a new customer
    await page.goto('/');
    await page.click('button[type="submit"]');
    await page.pause();
  });
});