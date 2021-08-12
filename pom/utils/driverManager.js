const chrome = require('selenium-webdriver/chrome');
var webdriver = require('selenium-webdriver');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
let options = new chrome.Options();
options.addArguments('disable-infobars');
options.setUserPreferences({ credential_enable_service: false });
chrome.setDefaultService(service);

/** Builds WebDriver object for tests */
var buildDriver = function() {
  return new webdriver.Builder()
  .setChromeOptions(options)
  .forBrowser('chrome')
  .build();
};

module.exports.buildDriver = buildDriver;