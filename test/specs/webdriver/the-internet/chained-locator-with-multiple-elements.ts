import Large from 'src/the-internet/large.page';

describe('Chained Locator', () => {
    it('should work', () => {
        Large.open();
        // elements are by purpose defined here and not in the page object model to show the usecase
        const parents = $$('div.parent');
        expect(parents.length).toBe(52);
        // const secondItems = parents.$$('div.item-2'); //doesn't work in WDIO
        const secondItems = $$(`${parents.selector} div.item-2`);
        expect(secondItems.length).toBe(50);
    });
});
