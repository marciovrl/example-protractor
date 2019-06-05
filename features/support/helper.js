let until = protractor.ExpectedConditions
let fs = require('fs')
let Buffer = require('safe-buffer').Buffer

const { setDefaultTimeout } = require('cucumber')
setDefaultTimeout(60 * 1000)

let Helper = function () {}

Helper.prototype.isElementAttachedToHtml = function (element) {
    browser.wait(until.presenceOf(element), 25000, 'Element ' + element.getText() + ' taking too long to appear in the DOM')
    browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement())
}

Helper.prototype.isClickable = function (element) {
    browser.wait(until.elementToBeClickable(element), 50000, 'Element taking too long to appear in the DOM and stay clickable')
}

Helper.prototype.isVisible = function (element) {
    browser.wait(until.visibilityOf(element), 10000, 'Element taking too long to appear in the DOM and stay visible')
}

Helper.prototype.stopBrowser = function (time) {
    browser.sleep(time)
}

Helper.prototype.scrollPageDown = function (valuePixels) {
  browser.executeScript('window.scrollBy(0,' + valuePixels + ');')
}

module.exports = Helper