'use strict';

describe('The main view', function() {
  var page;
  var expect = require('./chai-config').expect;

  beforeEach(function() {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include header nabvar', function() {
    expect(page.nabvar.isPresent()).to.eventually.be.true;
    expect(page.nabvar.element(by.css('.md-toolbar-tools span')).getText()).to.eventually.be.equal('ANGULAR WEATHER');
  });

  it('should redirect to search as default', function() {
    expect(browser.getCurrentUrl()).to.eventually.be.match(/\/search/);
  });
});
