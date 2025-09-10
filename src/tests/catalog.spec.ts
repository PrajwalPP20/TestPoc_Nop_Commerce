import test from "@playwright/test";
import { LoginPage } from "../pages/login-Page";
import { RandomGenerator } from "../utils/random-generator";
import catalogSearchFlow from 'proxymise'
import { CatalogSubMenuItem, MenuItem } from "../pages/common/side-nav";

test.describe('Customer Tests', () => {
  let email: string;
  let productDetails: string;

  test.beforeEach(() => {
    email = RandomGenerator.generateUniqueEmail();
    productDetails = 'Apple MacBook Pro 13-inch';
  });
  test('Navigate to Orders page and enter the required details', async ({ page }) => {
    await catalogSearchFlow(new LoginPage(page))
      .login()
      .navigateToRequiredPage(MenuItem.Catalog, CatalogSubMenuItem.Products)

    await page.pause();
  });
});