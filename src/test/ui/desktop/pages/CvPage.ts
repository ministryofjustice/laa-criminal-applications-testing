import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';
import { expect } from '../steps/fixtures.ts';

export class CvPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly pageHeading: {
    locator: Locator;
    value: string;
  } = {
    locator: this.page.getByRole('heading', { name: 'Steven Lau' }),
    value: 'Steven Lau',
  };

  async goto(): Promise<void> {
    await super.goto('https://www.stevenlau.net');
  }
}
