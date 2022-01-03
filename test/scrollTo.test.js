const internetPage = require("./pageobjects/internet.page");

describe("Scroll to the Element", async () => {
    it.skip("should move to the footer(out of bounds)", async () => {
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        //await browser.pause(3000);
        //await internetPage.pageFooter.scrollIntoView();
        await internetPage.moveToPageFooter();
        //await browser.pause(3000);
        assert.equal(await internetPage.pageFooter.isDisplayedInViewport(), true);
    });

    it("should scroll into view", async () => {
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        await internetPage.pageFooter.scrollIntoView();
        assert.equal(await internetPage.pageFooter.isDisplayedInViewport(), true);
        //await browser.pause(3000);
    });
})