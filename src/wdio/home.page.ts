import BasePage from '../base.page';

class Home extends BasePage {
    get title() { return 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'; }

    /**
     * Opens the page
     */
    open() {
        super.open('https://webdriver.io');
    }
}

export default new Home();
