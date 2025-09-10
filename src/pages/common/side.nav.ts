import { PageSection } from '../../utils/page-section.ts';

export enum MenuDash {
  Customers = 'Customers',
  Catalog = 'Catalog',
}

export enum CustomerSubMenuItem {
    Customers = 'Customers',
    Customer_roles = 'Customer roles',
    Online_customers = 'Online customers',  
    Vendors = 'Vendors',
    Activity_log = 'Activity log',
    Activity_Types = 'Activity Types',
    GDPR_requests_log='GDPR requests log',
  
}

export enum CatalogSubMenuItem {
    Products = 'Products',
    Categories = 'Categories',
  }


export type SubMenuItem = CustomerSubMenuItem | CatalogSubMenuItem;

export class SideNavigation extends PageSection {
  private readonly LOCATORS = {
     subMenu: this.scope.locator('.nav-item has-treeview'), // Adjust the selector as needed
  };

  async navigate(menuItem: MenuDash, subMenuItem?: SubMenuItem): Promise<void> {
    await this.page.pause();
    // Click the main navigation item
    await this.scope.getByRole('link', { name: menuItem, exact: true }).click();
     await this.page.pause();
    // If sub-item is provided, click it after the main item is expanded
    if (subMenuItem) {
      await this.scope.getByRole('link', { name: subMenuItem, exact: true }).click();                                       
    }
    // await this.moveMouseToCentre();                                                                          
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
    await this.scope.getByText(item).click();
  }
}
