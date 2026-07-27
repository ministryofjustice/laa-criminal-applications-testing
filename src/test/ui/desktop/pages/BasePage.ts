import { expect, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForPage(): Promise<void> {
    await this.page.waitForLoadState('networkidle'); // todo
  }

  async close() {
    return this.page.close();
  }

  async goBack() {
    return this.page.goBack();
  }

  async goForward() {
    return this.page.goForward();
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }

  async expectUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

  async expectTitle(title: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }
}
