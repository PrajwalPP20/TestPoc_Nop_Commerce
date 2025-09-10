import { WebPage } from '../../utils/web-page.js';
import {
  CatalogSubMenuItem,
  CustomerSubMenuItem,
  MenuDash,
  SideNavigation,} from '../common/side.nav.js';
import { test } from '@playwright/test';


export class HomePage extends WebPage {
  private readonly LOCATORS = {
    sideNavWrapper: this.page.locator('.sidebar'),
  
  };

  private get sideNavigation(): SideNavigation {
    return new SideNavigation(this.page, this.LOCATORS.sideNavWrapper);
  }

  async navigateToCustomersPage() {
    await this.sideNavigation.navigate(MenuDash.Customers, CustomerSubMenuItem.Customers);
    return this;
  }

  async navigateToCatalogpage() {
    await this.sideNavigation.navigate(MenuDash.Catalog, CatalogSubMenuItem.Products);
    return this;
  }


 
   

  
}
