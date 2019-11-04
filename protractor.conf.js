"use strict";

exports.config = {
  // directConnect: true,
  seleniumAddress: "http://localhost:4444/wd/hub",
  ignoreUncaughtExceptions: true,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  baseUrl: "https://www.mercadolivre.com.br/",
  verbose: true,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800x600"],
      w3c: false
    }
  },
  specs: ["features/specifications/*.feature"],
  cucumberOpts: {
    require: ["features/step_definitions/*.js", "features/support/*.js"],
    strict: true,
    format: ["json:results.json"],
    profile: false,
    "no-source": true
  },

  beforeLaunch: function() {
    setTimeout(function() {
      browser.driver
        .executeScript(function() {
          return {
            width: window.screen.availWidth,
            height: window.screen.availHeight
          };
        })
        .then(function(result) {
          browser.driver
            .manage()
            .window()
            .setSize(result.width, result.height);
        });
    });
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    const { Given, Then, When, Before } = require("cucumber");
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  },

  afterLaunch: function() {
    let reporter = require("cucumber-html-reporter");
    let options = {
      theme: "bootstrap",
      jsonFile: "results.json",
      output: "tests_result/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: true
    };
    // reporter.generate(options);
  }
};
