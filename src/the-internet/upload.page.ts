import BasePage from '../base.page';

class Upload extends BasePage {
    get fileUploadInput() { return $('input#file-upload'); }
    get submitButton() { return $('input#file-submit'); }
    get uploadedFiles() { return $('#uploaded-files'); }

    /**
     * Opens the page
     */
    open() {
        super.open('https://the-internet.herokuapp.com/upload');
    }
}

export default new Upload();
