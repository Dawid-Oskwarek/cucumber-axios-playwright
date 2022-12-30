import {Before, BeforeAll, AfterAll, After, setDefaultTimeout, Status} from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

setDefaultTimeout(600000);

let page: Page;
let context: BrowserContext;
let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({
        slowMo: 1200
    });
});
AfterAll(async function () {
    await browser.close();
});

Before(async function () {
    context = await browser.newContext({
       recordVideo: { dir: 'reports/videos'}
    });
    await context.tracing.start({ screenshots: true, snapshots: true });
    page = await context.newPage();
});
After(async function (Scenario) {
    if (Scenario.result!.status === Status.FAILED) {
        await this.attach(await page.screenshot({ path: `./reports/screenshots/${Scenario.pickle.name}-${Scenario.pickle.id}.png`, fullPage: true }), 'image.png');
        await context.tracing.stop({ path: `./reports/traces/${Scenario.pickle.name}-${Scenario.pickle.id }-trace.zip`});
    }
    await page.close();
    await context.close();
});

export { page }