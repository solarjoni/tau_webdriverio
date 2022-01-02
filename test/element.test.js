const internetPage = require("./pageobjects/internet.page");

describe("Interacting with element", async () => {
    it("Get text for element", async () => {
        await browser.url('/');
        let text = await $("//*[@id='page-footer']").getText();
        console.log("Text in element: " + text);
        await internetPage.getLiText();
        await internetPage.getSpecificElementText(3);
    });

    it("Is footer displayed?", async () => {
        console.log("Footer is displayed: " + await internetPage.pageFooter.isDisplayed());
    });

    it("Does the header exists?", async () => {
        console.log("Header exists: " + await internetPage.pageHeader.isExisting());
    });

    it("Is footer in viewport?", async () => {
        console.log("Footer is in viewport: " + await internetPage.pageFooter.isDisplayedInViewport());
    });

    it("Is header in viewport?", async () => {
        console.log("Header is in viewport: " + await internetPage.pageHeader.isDisplayedInViewport());
    });

    it("Is subheader enabled?", async () => {
        console.log("Is subheader enabled: " + await internetPage.subHeading.isEnabled());
    });

    it("Click Element", async () => {
        await internetPage.clickOnLink();
    });
});