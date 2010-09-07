
/**
 * Module dependencies.
 */

var soda = require('../index');

var browser = soda.createClient({
  url: 'http://sirrobertborden.ca.app.learnboost.com/'
});

browser
  .chain
  .session()
  .setTimeout(8000)
  .open('/')
  .waitForText('Submit')
  .clickAndWait('//input[@value="Submit"]')
  .clickAndWait('link=Settings')
  .type('user[name][first]', 'TJ')
  .clickAndWait('//input[@value="Save"]')
  .assertTextPresent('Account info updated')
  .clickAndWait('link=Log out')
  .testComplete()
  .end(function(err){
    if (err) throw err;
    console.log('done');
  });  