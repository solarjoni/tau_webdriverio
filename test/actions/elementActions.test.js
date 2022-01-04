const internetPage = require("../pageobjects/internet.page");

describe("Test element actions", async () => {
    it("should click element", async () => {
        await browser.url('/'); //goto default url
        await internetPage.clickFirstLink();
        let url = await browser.getUrl();
        // console.log("url is : " + url);
        await expect(url).equals('https://the-internet.herokuapp.com/abtest');
    });

    it("should get text", async () => {
        await browser.url('/'); //goto default url again (we clicked another url)
        let text = await internetPage.getSpecificElementText(1);
        await expect(text).equals('A/B Testing');
    });

    it("should click same checkbox twice", async () => {
        //await browser.url('/'); //goto default url
        await internetPage.clickLink(6); //checkboxes link
        await internetPage.clickCheckbox(1);
        let checkbox = await internetPage.checkboxes(1);
        let isSelected = await checkbox.isSelected();
        if(isSelected) {
            await expect(isSelected).equals(true);
        }
        await internetPage.clickCheckbox(1);
        if(!isSelected) {
            await expect(isSelected).equals(false);
        }
    });

    it("should enter username", async () => {
        //await browser.url(`${browser.options.baseUrl}/login`);
        await browser.url('/login');
        await internetPage.enterUsername('Antoin');
        await assert.equal(await internetPage.username.getValue(), 'Antoin');
    });

    it("should enter password", async () => {
        await browser.url(`${browser.options.baseUrl}/login`);
        //await browser.url('/login');
        await internetPage.enterPassword('secret');
        assert.equal(await internetPage.password.getValue(), 'secret');
    });

    it("should clear value", async () => {
        await internetPage.username.click();
        assert.equal(await internetPage.username.getValue(), '');
        await internetPage.username.clearValue();
    });
})