import { Locator, Page } from '@playwright/test';
import { WebPage } from './web-page.js';

export class PageSection extends WebPage {
  constructor(
    protected page: Page,
    protected scope: Locator
  ) {
    super(page);
  }

  protected async waitForBouncingLoaderToDisappearInSection({
    timeout = 75000,
  }: { timeout?: number } = {}) {
    try {
      await this.scope
        .locator('.transform-center > app-loading-indicator > .bouncing-loader')
        .waitFor({ state: 'visible', timeout: 1000 });
    } catch (error) {
      console.error('Error waiting for bouncing loader:', error);
    }
    await this.scope
      .locator('.transform-center > app-loading-indicator > .bouncing-loader')
      .waitFor({ state: 'hidden', timeout });
  }
}
