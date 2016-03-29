'use strict';

describe('Search View', function() {
  var page;
  var expect = require('../chai-config').expect;

  beforeEach(function() {
    browser.get('/search');
    page = require('./search.po');
  });

  it('should include a search box', function() {
    expect(page.searchBox.isPresent()).to.eventually.be.true;
    expect(page.searchBoxInput.isPresent()).to.eventually.be.true;
    expect(page.searchBoxBtn.isPresent()).to.eventually.be.true;
  });

  it('should search location by name', function() {
    page.searchBoxInput.sendKeys('San Luis');
    page.searchBoxBtn.click();

    expect(element.all(by.repeater('city in cities')).count()).to.eventually.be.at.least(4);
  });
});
