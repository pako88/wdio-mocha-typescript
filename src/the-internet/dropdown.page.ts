import BasePage from '../base.page';

class Dropdown extends BasePage {
    get select() { return $('#dropdown'); }

    /**
     * Opens the page
     */
    open() {
        super.open('https://the-internet.herokuapp.com/dropdown');
    }
}

export default new Dropdown();
