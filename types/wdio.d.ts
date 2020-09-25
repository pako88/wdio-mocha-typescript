/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace WebdriverIO {
//   interface Config {
//   }

//   interface Element {
//   }

  interface Browser {
      customConfig: () => any;
  }

  interface BrowserMetrics {
    firstMeaningfulPaint?: () => number;
    firstInteractive?: () => number;
    speedIndex?: () => number;
  }
}

declare module '@wdio/logger'
