/**
 * This file allows adds babel dependencies to nighwatch
 */


require('babel-core/register');
require('babel-register');
//require('babel-polyfill');


var SELENIUM = {
    start_process: true,
    server_path: "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.5.3.jar",
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
        "webdriver.chrome.driver":"./node_modules/chromedriver/lib/chromedriver/chromedriver",
      }
};

var CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var DEFAULT = {
    launch_url: "https://mlgcd.utechsapna.com/",
    selenium_port: 4444,
    selenium_host: "localhost",
    silent: true,
    screenshots: {
      "enabled": true,
      "path": "screenshots"
    },
    desiredCapabilities: CHROME_CONFIGURATION
};

var MOCHA_Configuration = {
    mocha:{
        "test_runner": {
            "type": "mocha",
            "options": {
              "ui": "bdd",
              "reporter": "list"
            }
          }
    }
};

var ENVIRONMENT = {
        default: DEFAULT,
        mocha:MOCHA_Configuration
    };


//module.exports = require('./nightwatch.json'); 

module.exports = {
    src_folders:"tests",
    output_folders:"reports",
    custom_commands_path: "custom/commands",
    custom_assertions_path: "",
    page_objects_path: [
      "page_objects"
    ],
    globals_path: "custom/globals.js",
    selenium : SELENIUM,
    default : DEFAULT,
    test_settings: ENVIRONMENT
};