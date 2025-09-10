import { Page } from "@playwright/test";
import { WebPage } from "../utils/web-page";
import { CatalogProductPage } from "./Catalog/catalog-product";
import { MenuItem, SideNavigation, SubMenuItem } from "./common/side-nav";
import { OrdersPage } from "./orders-page";

export type RequiredPage = OrdersPage | CatalogProductPage;

export class HomePage extends WebPage {
  private readonly LOCATORS = {
    sideNavWrapper: this.page.locator('.main-sidebar'),
  };

  private get sideNavigation(): SideNavigation {
    return new SideNavigation(this.page, this.LOCATORS.sideNavWrapper);
  }

  async navigateToRequiredPage(menuItem:MenuItem, subMenuItem?: SubMenuItem): Promise<OrdersPage> {
    await this.sideNavigation.navigate(menuItem, subMenuItem);
    return new OrdersPage(this.page); //refactor
  }
}