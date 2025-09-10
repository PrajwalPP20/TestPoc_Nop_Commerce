import { PageSection } from '../../utils/page-section.js';


export enum MenuItem {
  Sales = 'Sales',
  Catalog = 'Catalog',
  Customers = 'Customers',
  Promotions = 'Promotions',
}

export enum SalesSubMenuItem {
  Orders = 'Orders',
  Shipments = 'Shipments',
}

export enum CatalogSubMenuItem{
  Products = 'Products'

}

export type SubMenuItem = SalesSubMenuItem | CatalogSubMenuItem;

export class SideNavigation extends PageSection {
  private readonly LOCATORS = {
    subMenu: this.scope.locator('.nav-item has-treeview menu-is-opening menu-open')
    
  };

  async navigate(menuItem: MenuItem, subMenuItem?: SubMenuItem): Promise<void> {
    await this.scope.getByText( menuItem, { exact: true }).click();

    if (subMenuItem) {
      await this.scope.getByText(subMenuItem, {exact:true}).click();   
    }

    await this.moveMouseToCentre(); //
  }

  private async moveMouseToCentre(): Promise<void> {
    const viewportSize = await this.page.viewportSize();
    if (!viewportSize) return;

    const { width, height } = viewportSize;
    await this.page.mouse.move(width / 2, height / 2);
  }
}

export class SubMenuNavigation extends PageSection {
  async navigate(item: SubMenuItem): Promise<void> {
    await this.scope.getByText(item, {exact: true}).click();
  }
}
