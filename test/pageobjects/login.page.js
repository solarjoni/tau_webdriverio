const Page = require('./page')

class LoginPage extends Page {

    get username () { return $('#username') }
    get password () { return $('#password') }
    get loginBttn () { return $('form button[type="submit"]') }
    get flashMsg () { return $('#flash') }
    get logoutBttn () { return $('.example .button') }

    async open () {
        await super.open('login')
    }

    async enterUsername(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }

    async enterPassword(text) {
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }

    async login (Username, Password) {
        await this.username.setValue(Username)
        await this.password.setValue(Password)
        await this.loginBttn.click()
    }
    
    async clickLoginButton () {
        await this.loginBttn.waitForDisplayed()
        await this.loginBttn.click();
    }
    
    async clickLogoutButton () {
        await this.logoutBttn.waitForDisplayed()
        await this.logoutBttn.click();
    }

    async getFlashMessageText() {
        await this.flashMsg.waitForDisplayed()
        return await this.flashMsg.getText()
    }
}

module.exports = new LoginPage()
