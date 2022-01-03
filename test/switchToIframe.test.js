const internetPage = require("./pageobjects/internet.page");

describe("Switch to Iframe", async () => {
    it("should switch to iframe", async () => {
        await browser.url(`${browser.options.baseUrl}/iframe`);
        await internetPage.h3Header.waitForDisplayed();
        await internetPage.iframe.waitForDisplayed();
        await browser.switchToFrame(await internetPage.iframe);
        await internetPage.sendTextToIframeBody('This is the text in the iframe body.');
        assert.equal(await internetPage.iframeBody.getText(), 'This is the text in the iframe body.');
        //await browser.pause(5000);
    })
})