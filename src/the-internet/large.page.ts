import BasePage from '../base.page';

class Large extends BasePage {

    /**
     * Opens the page
     */
    open() {
        super.open('https://the-internet.herokuapp.com/large');
    }
}

export default new Large();
