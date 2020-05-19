import logger from '@wdio/logger';

export default class BasePage {
    log = logger('page-object-model');

    logger() { return this.log; }

    /**
     * Opens page
     */
    open(path: string) {
        this.log.debug(`Open site "${path}"`);
        browser.url(path);
    }
}
