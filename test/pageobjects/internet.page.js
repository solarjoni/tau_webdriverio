class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    async specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get firstLink() { return $('ul li:nth-child(1) a')}
    async link(index) { return $(`ul li:nth-child(${index}) a`) }
    /**
     * Clicks on link index
     * @param {Number} index the index of the element 
     */
    async clickLink(index) {
        let selectedLink = await this.link(index);
        await selectedLink.waitForDisplayed();
        await selectedLink.click();
    }
    async checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }
    
    async clickCheckbox(index) {
        let checkbox = await this.checkboxes(index);
        await checkbox.waitForDisplayed();
        await checkbox.click();
    }

    get username() { return $('#username') }
    get password() { return $('#password') }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered 
     */
    async enterUsername(text) {
        let uname = await this.username;
        await uname.waitForDisplayed();
        await uname.setValue(text);
    }
    /**
     * Enter the password into the field
     * @param {String} text password to be entered 
     */
    async enterPassword(text) {
        let psswrd = await this.password;
        await psswrd.waitForDisplayed();
        await psswrd.setValue(text);
    }
    
    async getLiText() {
        await this.childElements.filter(async (element) => {
            console.log("li element: " + await element.getText());
        })
    }

    async getSpecificElementText(index) {
        let element = await this.specificChildElement(index);
        await element.waitForDisplayed();
        return await element.getText();
    }

    async clickOnLink() {
        if(await this.firstLink.isDisplayed()) {
            await this.firstLink.click();
        };
        //await browser.pause(5000);
        await this.h3Header.waitForDisplayed();
    }
}

module.exports = new Internet();