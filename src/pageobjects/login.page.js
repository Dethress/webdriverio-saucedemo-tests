class LoginPage {
    get usernameInput() {
        return $('//input[@id="user-name"]');
    }
    get passwordInput() {
        return $('//input[@id="password"]');
    }
    get loginButton() {
        return $('//input[@id="login-button"]');
    }
    get errorMessage() {
        return $('//h3[@data-test="error"]');
    }
    get pageTitle() {
        return $('//div[@class="app_logo"]');
    }

    async open() {
        await browser.url('/');
    }

    async login() {
        await this.usernameInput.setValue('standard_user');
        await this.passwordInput.setValue('secret_sauce');
        await this.loginButton.click();
    }

    async clearUsername() {
        await this.usernameInput.clearValue();
    }
    async clearPassword() {
        await this.passwordInput.clearValue();
    }

    async getPageTitle() {
        return await this.pageTitle.getText();
    }

}

export default new LoginPage();