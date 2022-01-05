const internetPage = require("./pageobjects/internet.page");

describe("Wait for Exist", async () => {

    it("should wait until delete button exists", async () => {
        await browser.url(`${browser.options.baseUrl}/add_remove_elements/`);
        await internetPage.clickExampleButton();
        //await internetPage.clickExampleButton();
        let dltBttn1 = await internetPage.deleteButton(1);
        await dltBttn1.waitForExist();
        assert.equal(await dltBttn1.isExisting(), true);
    });

    it("should wait for the delete button to not exist", async () => {
        await internetPage.clickDeleteButton(1);
        let dltBttn1 = await internetPage.deleteButton(1);
        await dltBttn1.waitForExist( {timeout:500, reverse: true});
        assert.equal(await dltBttn1.isExisting(), false);
    });
})