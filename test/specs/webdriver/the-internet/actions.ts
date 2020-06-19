import TinyMCE from 'src/the-internet/tinymce.page';

describe('Actions', () => {
    it('should work', () => {
        TinyMCE.open();
        browser.switchToFrame(TinyMCE.iframe);

        expect(TinyMCE.textbox).toHaveText('Your content goes here.');

        TinyMCE.textbox.click();

        let actions = [
            {
                type: 'key',
                id: 'keyboard',
                actions: [
                    { type: 'keyDown', value: '\uE009' },
                    { type: 'keyDown', value: 'a' },
                ],
            },
        ];
        browser.performActions(actions);
        browser.releaseActions();

        actions = [
            {
                type: 'key',
                id: 'keyboard',
                actions: [
                    { type: 'keyDown', value: '\uE009' },
                    { type: 'keyDown', value: 'c' },
                ],
            },
        ];
        browser.performActions(actions);
        browser.releaseActions();

        actions = [
            {
                type: 'key',
                id: 'keyboard',
                actions: [
                    { type: 'keyDown', value: '\uE009' },
                    { type: 'keyDown', value: 'v' },
                ],
            },
        ];
        browser.performActions(actions);
        browser.releaseActions();
        browser.performActions(actions);
        browser.releaseActions();

        expect(TinyMCE.textbox).toHaveText('Your content goes here.Your content goes here.');
    });
});
