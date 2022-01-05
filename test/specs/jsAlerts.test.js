const internetPage = require("./pageobjects/internet.page");

describe("Javascript Alerts", async () => {
    it("should get the text of an alert", async () => {
        await browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        await internetPage.clickJsAlertButton(1);
        assert.equal(await browser.getAlertText(), 'I am a JS Alert');
        //console.log(await browser.getAlertText());
        //await browser.pause(3000);
    });

    it("should accept alert", async () => {
        await browser.acceptAlert();
        assert.equal(await internetPage.getResultText(), 'You successfully clicked an alert');
    });

    it("should dismiss an alert", async () => {
        await internetPage.clickJsAlertButton(2);
        await browser.dismissAlert();
        assert.equal(await internetPage.getResultText(), 'You clicked: Cancel');
    });

    it("should send text to the alert", async () => {
        await internetPage.clickJsAlertButton(3);
        await browser.sendAlertText('Faster than light.');
        await browser.acceptAlert();
        assert.equal(await internetPage.getResultText(), 'You entered: Faster than light.');
    })
})