const internetPage = require("./pageobjects/internet.page");

describe("Interacting with element", async () => {
    it("Get text for element", async () => {
        await browser.url('/');
        let text = await $("//*[@id='page-footer']").getText();
        console.log("Text in element: " + text);
        await internetPage.getLiText();
        await internetPage.getSpecificElementText(3);
    });
});