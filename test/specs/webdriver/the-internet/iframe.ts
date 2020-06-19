import TinyMCE from 'src/the-internet/tinymce.page';

describe('iFrame', () => {
    it('should work', () => {
        TinyMCE.open();
        browser.switchToFrame(TinyMCE.iframe);
        expect(TinyMCE.textbox).toHaveText('Your content goes here.');
    });
});
