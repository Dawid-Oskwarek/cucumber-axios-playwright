import { Locator } from '@playwright/test'

async function clickAndWaitForNavigation(locator: Locator): Promise<void> {
    await Promise.all([
        locator.page().waitForNavigation(),
        locator.click(),
    ]);
}

async function isLocatorVisible(locator: Locator): Promise<boolean> {
    try {
        await locator.waitFor();
    }
    catch {
        return false;
    }
    return true;
}

export { clickAndWaitForNavigation, isLocatorVisible }


