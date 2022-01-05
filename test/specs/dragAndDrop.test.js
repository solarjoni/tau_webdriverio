const internetPage = require("./../pageobjects/internet.page");

describe("Drag and Drop", async () => {
    it.skip("should drag from box A to box B, not working", async () => {
        await browser.url(`${browser.options.baseUrl}/drag_and_drop`);
        await internetPage.dragColumnAToColumnB();
        await browser.pause(5000);
        assert.equal(await internetPage.columnBHeader.getText(), 'A');
    });

    it.only("should drag and drop", async () => {
        await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html');
        await internetPage.dragDraggableToDroppable();
        //await browser.pause(5000);
        assert.equal(await internetPage.droppableParagraph.getText(), 'Dropped!');
    });
})