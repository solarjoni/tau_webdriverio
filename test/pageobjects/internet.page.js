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

    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }
    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }

    /**
     * Drag box A to box B
     */
    async dragColumnAToColumnB() {
        await this.columnA.waitForDisplayed();
        //await this.columnB.waitForDisplayed();
        await this.columnA.moveTo(1,1);
        await this.columnA.dragAndDrop(await this.columnB);
    };

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }
    
    /**
     * Drag and drop
     */
    async dragDraggableToDroppable() {
        await this.draggable.waitForDisplayed();
        await this.draggable.dragAndDrop(await this.droppable);
    }

    get dropdwonMenu() { return $('#dropdown') }

    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)') }

    async clickDropdownMenu() {
        await this.dropdwonMenu.waitForDisplayed();
        await this.dropdwonMenu.click();
    };

    async clickDropdownMenuOption1() {
        await this.dropdownMenuOption1.waitForDisplayed();
        await this.dropdownMenuOption1.click();
    };

    async clickDropdownMenuOption2() {
        await this.dropdownMenuOption2.waitForDisplayed();
        await this.dropdownMenuOption2.click();
    };

    async jsAlertButton(index) { return $(`.example li:nth-child(${index}) button`) }

    /**
     * Click javascript alert button based on the index
     * @param {Number} index the index of the element 
     */
    async clickJsAlertButton(index) {
        let bttn = await this.jsAlertButton(index); 
        await bttn.waitForDisplayed();
        await bttn.click();
    }

    get enableButton() { return $('#input-example button') }
    get inputEnabledField() { return $('#input-example input')}

    /**
     * Click the Enable/Disable Button
     */
    async clickEnableButton() {
        await this.enableButton.waitForDisplayed();
        await this.enableButton.click();
    };

    get exampleButton() { return $('.example button') }
    async deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    async clickExampleButton() {
        await this.exampleButton.waitForDisplayed();
        await this.exampleButton.click();
    };

    async clickDeleteButton(index) {
        let bttn = await this.deleteButton(index)
        await bttn.waitForDisplayed();
        await bttn.click();
    };

    get pageButton() { return $('#checkbox-example button') }
    async clickPageButton() {
        await this.pageButton.waitForDisplayed();
        await this.pageButton.click();
    }
}

module.exports = new Internet();
