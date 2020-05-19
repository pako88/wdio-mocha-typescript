import BasePage from '../base.page';

class TinyMCE extends BasePage {
    get iframe() { return $('#mce_0_ifr'); }
    get textbox() { return $('body#tinymce p'); }

    /**
     * Opens the page
     */
    open() {
        super.open('https://the-internet.herokuapp.com/tinymce');
        super.logger().debug('Opened the TinyMCE page'); // just to demonstrate logging in page object file
    }
}

export default new TinyMCE();
