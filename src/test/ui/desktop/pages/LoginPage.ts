import { expect, Locator, Page } from '@playwright/test';
import { NavigationComponent } from '../components/navigation.ts';
import { BasePage } from './BasePage.ts';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
}