// This test only works with devtools config

import Home from 'src/wdio/home.page';

describe('my test', () => {
    it('can use puppeteer', () => {
        // WebDriver command - normal wdio logo
        Home.open();

        // switch to Puppeteer to intercept requests
        const puppeteerBrowser = browser.getPuppeteer();
        const page = browser.call(() => puppeteerBrowser.pages())[0];
        browser.call(() => page.setRequestInterception(true));
        browser.call(() => page.on('request', (interceptedRequest) => {
            if (interceptedRequest.url().endsWith('webdriverio.png')) {
                return interceptedRequest.continue({
                    url: 'https://webdriver.io/img/puppeteer.png',
                });
            }
            interceptedRequest.continue();
        }));

        // continue with WebDriver commands - wdio logo is replaced with puppeteer logo
        Home.open();
    });
});
