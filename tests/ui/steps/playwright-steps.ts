import { Given, When, Then, Before } from '@cucumber/cucumber';
import { page } from '../support/hooks';
import { clickButton } from '../support/pages/HtmlElementsPage';
import { isSuccessMessageVisible } from '../support/pages/SuccessPage';
import { expect } from '@playwright/test';

Given('I access the website', async function () {
    const url = process.env.UI_URL;
    await page.goto(url);
});

When('I click on class button', async function () {
    await clickButton();
});

Then('I receive a success message', async function () {
    expect(await isSuccessMessageVisible()).toBeTruthy();
});
