class Internet {
    get pageHeader() { return $('h1.heading'); }
    get subHeading() { return $('h2'); }
    get pageFooter() { return $('#page-footer'); }
    get parent() { return $('ul'); }
    get childElements() { return this.parent.$$('li'); }
    get firstLink() { return $('ul li:nth-child(1) a')};

    async specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`); }

    async getLiText() {
        await this.childElements.filter(async (element) => {
            console.log("li element: " + await element.getText());
        })
    }

    async getSpecificElementText(index) {
        let element = await this.specificChildElement(index);
        console.log("Specific element " + index + ': ' + await element.getText());
    }

    async clickOnLink() {
        if(await this.firstLink.isDisplayed()) {
            await this.firstLink.click();
        };
        await browser.pause(5000);
    }
}

module.exports = new Internet();