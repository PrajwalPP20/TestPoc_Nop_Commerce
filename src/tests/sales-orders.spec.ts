import test from "@playwright/test";
import { LoginPage } from "../pages/login-Page.ts";
import searchOrderFlow from 'proxymise'
import { RandomGenerator } from "../utils/random-generator.ts";
import { MenuItem, SalesSubMenuItem } from "../pages/common/side-nav.ts";

test.describe.only('Customer Tests', () => {
  let email: string;
  let productDetails: string;
  let orderNotes: string;
  let billingLastName: string;

  test.beforeEach(() => {
    email = RandomGenerator.generateUniqueEmail();
    productDetails = 'Apple MacBook Pro 13-inch';
    orderNotes = 'Please deliver between 9 AM to 5 PM';
    billingLastName = 'Smith';

  });
  test.only('Navigate to Orders page and enter the required details', async ({ page }) => {
    await searchOrderFlow(new LoginPage(page))
      .login()
      .navigateToRequiredPage(MenuItem.Sales, SalesSubMenuItem.Orders)
      .fillRequiredDetails(productDetails, email, billingLastName, orderNotes);
    await page.pause();
  });
});