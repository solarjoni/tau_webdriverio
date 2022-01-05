//Page.js

export default class Page {
    constructor() {
        title = 'My page'
    }

    async open (path) {
        //await browser.url(`${browser.options.baseUrl}/${path}`)
        await browser.url(path)

    }
}