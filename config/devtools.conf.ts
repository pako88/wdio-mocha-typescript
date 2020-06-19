import { baseConfig as config } from './base.conf';

config.services.push('devtools');

config.specs = [
    './test/specs/cdp/**/*.ts'
];

export { config };
