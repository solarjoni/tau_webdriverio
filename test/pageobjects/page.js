//Page.js

class Page {
    async open (path) {
        //await browser.url(`${browser.options.baseUrl}/${path}`)
        await browser.url(path)

    }
}

module.exports = Page