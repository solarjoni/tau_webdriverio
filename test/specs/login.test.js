const loginPage = require("./../pageobjects/login.page")
const logindata  = require('./../../data/logindata')
const { assert } = require("chai")

describe('Login page test', async () => {
    it('should enter valid username', async () => {
        await loginPage.open()
        await loginPage.enterUsername(logindata.Username)
        assert.equal(await loginPage.username.getValue() ,logindata.Username)
    })

    it('should enter valid password', async () => {
        await loginPage.enterPassword(logindata.Password)
        assert.equal(await loginPage.password.getValue(), logindata.Password)
    })

    it('should successfully login with valid credentials', async () => {
        await loginPage.clickLoginButton()
        assert.equal(await loginPage.getFlashMessageText() ,'You logged into a secure area!\n×')
    })
    
    it('should successfully logout', async () => {
        await loginPage.clickLogoutButton()
        assert.equal(await loginPage.getFlashMessageText() ,'You logged out of the secure area!\n×')
        //await browser.pause(3000)
    })

    it('should get correct message for missing username', async () => {
        await loginPage.clickLoginButton()
        assert.equal(await loginPage.getFlashMessageText() ,'Your username is invalid!\n×')
        //await browser.pause(3000)
    })

    it('should get correct message for incorrect password', async () => {
        await loginPage.enterUsername(logindata.Username);
        await loginPage.enterPassword('password')
        await loginPage.clickLoginButton()
        assert.equal(await loginPage.getFlashMessageText() ,'Your password is invalid!\n×')
        await browser.pause(3000)
    })
})
