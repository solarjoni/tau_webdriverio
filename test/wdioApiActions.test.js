const internetPage = require("./pageobjects/internet.page");

describe('WebdriverIO API Actions', async () => {
    it('should hover on figure 1', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`);
        await internetPage.hoverOnFigure(3);
        assert.equal(await internetPage.getHoverDetailsText(3) ,"name: user1");
        //await browser.pause(3000);
    });

    it('should hover on figure 2', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`);
        await internetPage.hoverOnFigure(4);
        assert.equal(await internetPage.getHoverDetailsText(4) ,"name: user2");
        //await browser.pause(3000);
    });

    it('should hover on figure 3', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`);
        await internetPage.hoverOnFigure(5);
        assert.equal(await internetPage.getHoverDetailsText(5) ,"name: user3");
        //await browser.pause(3000);
    });

    it('should send keyboard value BackSpace', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`);
        await internetPage.clickTarget();
        await internetPage.sendKeysToTarget("Backspace");
        assert.equal(await internetPage.getResultText(), "You entered: BACK_SPACE");
        //await browser.pause(3000);
    });

    it('should send keyboard value Tab', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`);
        await internetPage.clickTarget();
        await internetPage.sendKeysToTarget("Tab");
        assert.equal(await internetPage.getResultText(), "You entered: TAB");
        //await browser.pause(3000);
    });

    it('should send keyboard value Shift', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`);
        await internetPage.clickTarget();
        await internetPage.sendKeysToTarget("Shift");
        assert.equal(await internetPage.getResultText(), "You entered: SHIFT");
        //await browser.pause(3000);
    });
})