import { Page } from '@playwright/test';
import { test } from '@playwright/test';

export class PageUtils {
  constructor(private page: Page) {}

  async bringToFront(targetPage: string): Promise<void> {
    await test.step(`Switching to ${targetPage} tab`, async () => {
      await this.page.waitForTimeout(1000);
      await this.page.bringToFront();
    });
  }

  async reloadAndWaitForLoad(): Promise<void> {
    await test.step('Reload page and wait for load', async () => {
      await this.page.reload();
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForLoadState('networkidle');
      await this.page.waitForSelector('body', { state: 'visible' });
    });
  }

  async switchToPageAndWaitForLoad(targetPage: string): Promise<void> {
    await test.step(`Switching to ${targetPage} tab and waiting for load`, async () => {
      await this.bringToFront(targetPage);
      await this.reloadAndWaitForLoad();
    });
  }

  async waitForTimeout(ms: number): Promise<void> {
    await test.step(`Waiting for load`, async () => {
      await this.page.waitForTimeout(ms);
    });
  }

  async goto(url: string): Promise<void> {
    await test.step(`Navigating to ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  async newContext(): Promise<Page> {
    return test.step('Opening a new Tab OR Creating a new context', async () => {
      return await this.page.context().newPage();
    });
  }
}
