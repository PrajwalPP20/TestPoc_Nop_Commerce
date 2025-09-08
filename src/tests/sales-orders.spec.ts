import test from "@playwright/test";
import { LoginPage } from "../pages/login-Page.ts";

test.describe.only('Customer Tests', () => {
  test('Add New Customer', async ({ page }) => {
    // logging in
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.clickSubmit();
    
    
  });


});