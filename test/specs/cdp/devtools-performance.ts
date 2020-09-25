// This test only works with devtools config

import { BrowserMetrics } from "@wdio/sync";

describe('Page', () => {
    before(() => {
        browser.enablePerformanceAudits();
    });

    after(() => {
        browser.disablePerformanceAudits();
    });

    it('should load within performance budget', () => {
        browser.url('https://magnificent-cabbage.glitch.me/');

        const metrics: BrowserMetrics = browser.getMetrics();
        const score = browser.getPerformanceScore();

        expect(metrics.firstMeaningfulPaint).toBeLessThan(3 * 1000); // 3 seconds
        expect(metrics.firstInteractive).toBeLessThan(3 * 1000); // 3 seconds
        expect(metrics.speedIndex).toBeLessThan(4.2 * 1000);
        expect(score).toBeGreaterThan(0.92);
    });
});
