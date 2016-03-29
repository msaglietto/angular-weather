/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var SearchPage = function() {
  this.searchBox = element(by.css('search-box'));
  this.searchBoxInput = this.searchBox.element(by.css('input'));
  this.searchBoxBtn = this.searchBox.element(by.css('button'));
};

module.exports = new SearchPage();
