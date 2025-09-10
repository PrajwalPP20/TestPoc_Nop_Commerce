import {test} from "@playwright/test";
import { LoginPage } from "../pages/login-Page.ts";
import {
  CustomerSubMenuItem,
  MenuDash,
  SideNavigation,
} from "../pages/common/side.nav.ts";

import customerflow from 'proxymise'

test.describe("Customer Tests", () => {


    test("Login to the application", async ({page}) => {
      await customerflow(new LoginPage(page))
      .navigateTo()
      .navigateToCustomersPage()
        
      
    });
  
});
