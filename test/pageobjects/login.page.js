import Page from './page'
import {Username, Password } from '../../data/logindata'

class LoginPage extends Page {

    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitBttn () { return $('form submit[type="submit"]') }
    get flashMsg () { return $('#flash') }

    async open () {
        await super.open('login')
    }

    async login (Username, Password) {
        await this.submitBttn.waitForDisplayed()
        await this.username.setValue(Username)
        await browser.pause(5000);
        await this.password.setValue(Password)
        await this.submitBttn.click()
    }
}

module.exports = new LoginPage()