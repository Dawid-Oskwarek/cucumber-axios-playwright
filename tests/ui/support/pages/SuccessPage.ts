import { page } from '../hooks';
import { isLocatorVisible } from '../helper';

const successMessage = () => page.locator('text=Button success');

async function isSuccessMessageVisible(): Promise<boolean> {
    return await isLocatorVisible(successMessage());
}

export { isSuccessMessageVisible }


