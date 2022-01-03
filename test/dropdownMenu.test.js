const internetPage = require("./pageobjects/internet.page");

describe("Dropdown Menu", async () => {
    it("should select option1", async () => {
        await browser.url(`${browser.options.baseUrl}/dropdown`);
        await internetPage.clickDropdownMenu();
        await internetPage.clickDropdownMenuOption1();
        assert.equal(await internetPage.dropdownMenuOption1.isSelected(), true);
    });

    it("should select option2", async () => {
        await internetPage.clickDropdownMenu();
        await internetPage.clickDropdownMenuOption2();
        assert.equal(await internetPage.dropdownMenuOption2.isSelected(), true);
        await browser.pause(5000);
    });
})