import { Locator, Page } from '@playwright/test';

export class NavigationComponent {

    readonly signOutButton: Locator;

    constructor(private readonly page: Page) {
        this.signOutButton = page.getByRole('button', {
            name: 'Sign out',
        });
    }

    async signOut(): Promise<void> {
        await this.signOutButton.click();
    }
}