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
    
    async clickFirstLink() {
        if(await this.firstLink.isDisplayed()) {
            await this.firstLink.click();
        };
        //await browser.pause(5000);
        await this.h3Header.waitForDisplayed();
    }

    /**
     * Clicks on link index
     * @param {Number} index the index of the element 
     */
    async clickLink(index) {
        let selectedLink = await this.link(index);
        await selectedLink.waitForDisplayed();
        await selectedLink.click();
    }

    /**
     * Scrolls to page footer
     */
    async moveToPageFooter() {
        //await this.pageFooter.scrollIntoView();
        await this.pageFooter.moveTo();
    };

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
        //let uname = await this.username;
        await this.username.waitForDisplayed();
        await this.username.setValue(text);
    }
    
    /**
     * Enter the password into the field
     * @param {String} text password to be entered 
     */
    async enterPassword(text) {
        //let psswrd = await this.password;
        await this.password.waitForDisplayed();
        await this.password.setValue(text);
    }
    
    async figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
    async figureDetails(index) {return $(`.example .figure:nth-child(${index}) .figcaption h5`) }
    
    /**
     * Hovers over the specified image
     * @param {Nnumber} index the specific index of the image 
     */
    async hoverOnFigure(index) {
        let fgr = await this.figures(index);
        await fgr.waitForDisplayed();
        await fgr.moveTo(1,1);
    };

    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
    async getHoverDetailsText(index) {
        let txt = await this.figureDetails(index);
        await txt.waitForDisplayed();
        return await txt.getText();
    };

    get target() { return $('.example #target') }
    get result() { return $('.example #result') }

    /**
     * Clicks the target imput field
     */
    async clickTarget() {
        await this.target.waitForDisplayed();
        await this.target.click();
    };

    /**
     * Send keyboard keys to target
     * @param {String} text The keyboard text to enter
     */
    async sendKeysToTarget(text) {
        await this.target.waitForDisplayed();
        await this.target.keys(text);
    };

    async getResultText() {
        await this.result.waitForDisplayed();
        return await this.result.getText();
    };

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

    get hereLink() { return $('.example a') };
    
    /**
     * Click the "Click Here" link
     */
    async clickHereLink() {
        await this.hereLink.waitForDisplayed();
        await this.hereLink.click();
    };

    get iframeBody () { return $('#tinymce') }
    get iframe () { return $('.tox-edit-area #mce_0_ifr') }

    /**
     * Enter text into the iframe body
     * @param {String} text the text to be entered 
     */
    async sendTextToIframeBody(text) {
        await this.iframeBody.waitForDisplayed();
        await this.iframeBody.clearValue();
        await this.iframeBody.click();
        await this.iframeBody.keys(text);
    };
}

module.exports = new Internet();