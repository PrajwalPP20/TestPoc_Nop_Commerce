import { Page } from '@playwright/test';

export class WebPage {
  constructor(protected page: Page) {}

  protected async waitForNetworkIdle({ timeout = 60000 }: { timeout?: number } = {}) {
    await this.page.waitForLoadState('networkidle', { timeout });
  }

  protected async waitForLoadComplete({ timeout = 60000 }: { timeout?: number } = {}) {
    await this.page.waitForLoadState('load', { timeout });
  }

  protected async waitForDomContentLoaded({ timeout = 60000 }: { timeout?: number } = {}) {
    await this.page.waitForLoadState('domcontentloaded', { timeout });
  }

  protected async waitForBouncingLoaderToDisappear({ timeout = 60000 }: { timeout?: number } = {}) {
    try {
      await this.page.waitForSelector('.bouncing-loader', { state: 'visible', timeout: 1000 });
    } catch (error) {
      console.error('Error waiting for bouncing loader:', error);
    }
    await this.page.waitForSelector('.bouncing-loader', { state: 'hidden', timeout });
  }
}
