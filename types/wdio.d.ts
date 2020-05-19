/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace WebdriverIO {
//   interface Config {
//   }

//   interface Element {
//   }

  interface Browser {
      getPuppeteer: () => any;
  }
}

declare module '@wdio/logger'
