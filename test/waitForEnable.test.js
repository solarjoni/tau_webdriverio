const internetPage = require("./pageobjects/internet.page");

describe("Wait for Enabled/Disabled", async () => {
    it("should wait for the input field to be enabled", async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        await internetPage.clickEnableButton();
        await internetPage.inputEnabledField.waitForEnabled(4000);
        assert.equal(await internetPage.inputEnabledField.isEnabled(), true);
    });

    it("should wait for the input field to be disabled", async () => {
        await internetPage.clickEnableButton();
        await internetPage.inputEnabledField.waitForEnabled( {timeout: 4000, reverse: true} );
        assert.equal(await internetPage.inputEnabledField.isEnabled(), false);
    });
})