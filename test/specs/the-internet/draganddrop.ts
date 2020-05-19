import DragAndDrop from 'src/the-internet/draganddrop.page';

const dragAndDrop = require('html-dnd').codeForSelectors;

describe('Drag and Drop', () => {
    it('should work', () => {
        DragAndDrop.open();
        // DragAndDrop.columnA.dragAndDrop(DragAndDrop.columnB); // doesn't work
        browser.execute(dragAndDrop, DragAndDrop.columnA.selector, DragAndDrop.columnB.selector);
        expect(DragAndDrop.columnAHeader).toHaveText('B');
    });
});
