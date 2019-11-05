const Helper = require("../support/helper.js");

class Home {
  constructor() {
    this.helper = new Helper();
    this.searchText = element(by.name("as_word"));
    this.searchButton = element(by.css(".nav-search-btn"));
    this.resultLabel = element(by.css(".breadcrumb__title"));
  }

  visit(url) {
    return browser.get(url);
  }

  inputItem(item) {
    this.searchText.sendKeys(item);
  }

  clickSearchButton() {
    this.searchButton.click();
  }

  searchItem(item) {
    this.inputItem(item);
    this.clickSearchButton();
  }

  getTextResult(item) {
    return this.resultLabel.getText();
  }
}

module.exports = Home;
