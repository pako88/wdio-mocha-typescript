import { baseConfig as config } from './base.conf';

config.services.push('chromedriver');

config.specs = [
    './test/specs/webdriver/**/*.ts'
];

export { config };
