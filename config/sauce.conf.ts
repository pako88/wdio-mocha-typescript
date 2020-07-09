import { baseConfig as config } from './base.conf';

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = 'eu';

config.services.push(['sauce', {
    setJobNameInBeforeSuite: true
}]);

config.specs = [
    './test/specs/webdriver/**/*.ts'
];

const build = new Date().toISOString();
config.capabilities = [
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        "sauce:options": {
            build: build,
        }
    },
    {
        browserName: 'firefox',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        "sauce:options": {
            build: build,
        }
    },
    {
        browserName: 'MicrosoftEdge',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        "sauce:options": {
            build: build,
        }
    },
    {
        browserName: 'internet explorer',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        "sauce:options": {
            build: build,
        }
    },
    {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'macOS 10.15',
        "sauce:options": {
            build: build,
        }
    },
];

export { config };
