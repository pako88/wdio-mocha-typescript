/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace WebdriverIO {
  interface Config {
      logLevel?: string;
      capabilities?: any;
  }

//   interface Element {
//   }

  interface Browser {
      getPuppeteer: () => any;
  }
}

declare module '@wdio/logger'
