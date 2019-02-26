'use strict'
class Page{
    open (path) {
      browser.url(path)
    };
  };
  module.exports = Page;