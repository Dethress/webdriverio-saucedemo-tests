import loginPage from '../pageobjects/login.page.js';
import credentials from '../data/credentials.js';

describe('Saucedemo login tests', () => {

    beforeEach(async () => {
        await loginPage.open();
    });

    credentials.forEach(data => {
        it(data.name, async () => {
            

            await loginPage.usernameInput.setValue(data.username);
            await loginPage.passwordInput.setValue(data.password);

            if(data.clearUsername) await loginPage.clearUsername();
            if(data.clearPassword) await loginPage.clearPassword();

            await loginPage.loginButton.click();

            if(data.expectedError) {
                await expect(loginPage.errorMessage).toBeDisplayed();
                await expect(loginPage.errorMessage).toHaveText(data.expectedError);
            }
            else {
                await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
                await expect(loginPage.pageTitle).toBeDisplayed();
                const headerText = await loginPage.getPageTitle();
                console.log(`Header text found: ${headerText}`);

                expect(headerText).toBe(data.expectedHeader);
                console.log('Login successful, header text matches expected value.');
            }
        })
    });
});