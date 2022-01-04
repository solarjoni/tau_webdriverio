const internetPage = require("./pageobjects/internet.page");

describe("Scroll to the Element", async () => {
    it("should move to the footer(out of bounds)", async () => {
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        //await internetPage.pageHeader.waitForDisplayed( {timeout: 1000, reverse: true} );
        await internetPage.pageFooter.scrollIntoView();
        await internetPage.moveToPageFooter();
        assert.equal(await internetPage.pageFooter.isDisplayedInViewport(), true);
    });

    it.skip("should scroll into view", async () => {
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        await internetPage.pageFooter.scrollIntoView();
        assert.equal(await internetPage.pageFooter.isDisplayedInViewport(), true);
        //await browser.pause(3000);
    });
})