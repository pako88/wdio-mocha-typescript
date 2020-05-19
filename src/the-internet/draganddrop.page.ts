import BasePage from '../base.page';

class Dropdown extends BasePage {
    get columnA() { return $('#column-a'); }
    get columnAHeader() { return this.columnA.$('header'); }
    get columnB() { return $('#column-b'); }

    /**
     * Opens the page
     */
    open() {
        super.open('https://the-internet.herokuapp.com/drag_and_drop');
    }
}

export default new Dropdown();
