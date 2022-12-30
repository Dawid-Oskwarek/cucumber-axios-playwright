import { page } from '../hooks';
import { isLocatorVisible } from '../helper';

const successMessage = () => page.locator(':contains("Button success")');

async function isSuccessMessageVisible(): Promise<boolean> {
    return await isLocatorVisible(successMessage());
}

export { isSuccessMessageVisible }


