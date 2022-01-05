const internetPage = require("./pageobjects/internet.page");

describe("Switch Window", async () => {
    it("should switch to the next window", async () => {
        await browser.url(`${browser.options.baseUrl}/windows`);
        await internetPage.clickHereLink();
        await browser.switchWindow(`${browser.options.baseUrl}/windows/new`);
        //await browser.switchWindow('New Window'); //working
        //await browser.switchWindow('/windows/new'); //working
        assert.equal(await internetPage.h3Header.isExisting(), true);
        assert.equal(await internetPage.h3Header.isDisplayed(), true);
        assert.equal(await internetPage.h3Header.getText(), 'New Window');
        //wait browser.pause(5000);
    });
})
    