const internetPage = require("./../pageobjects/internet.page");

describe("WaitUntil",  async () => {
    it("should wait until the button text changes to Add", async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        await internetPage.clickPageButton();
        await browser.waitUntil( async () => {
            return await internetPage.pageButton.getText() === 'Add';
        }, 6000, 'Expect button text to change');
        assert.equal(await internetPage.pageButton.getText(), 'Add');
    });

    it("should wait until the button text changes to Remove", async () => {
        await internetPage.clickPageButton();
        await browser.waitUntil( async () => {
            return await internetPage.pageButton.getText() === 'Remove';
        }, 6000, 'Expect button text to change');
        assert.equal(await internetPage.pageButton.getText(), 'Remove');
    });
})