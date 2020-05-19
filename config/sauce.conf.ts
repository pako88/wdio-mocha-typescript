import { baseConfig as config } from './base.conf';

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = 'eu';

config.services.push(['sauce', {
    setJobNameInBeforeSuite: true
}]);

// TODO: add build string etc
config.capabilities = [{
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    "sauce:options": {
        build: "local run",
    }
}];

export { config };
