import { page } from '../hooks';
import { clickAndWaitForNavigation } from '../helper';

const button = () => page.locator('.buttonClass');

async function clickButton(): Promise<void> {
    await clickAndWaitForNavigation(button());
}

export { clickButton }


