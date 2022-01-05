const loginPage = require("../../e2e/test/pageobjects/login.page")

describe('Login page test', async () => {
    it('should log in with valid credentials', async () => {
        await loginPage.open('/')
        await loginPage.login()
        await browser.pause(5000);
    })
})