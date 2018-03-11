/**
 * Each test file may should be considered as a test suite and may contain one or * test cases. The 'beforeEach' hook may be used to run sections of code/logic before the indifivual tests
 * 
 */

//Export the entire file to ensure it is found my nightwatch
export default {

  /**
   * Nightwatch functions generally take a browser parameter to interact with th ebrowser
  */
  before(browser) {
    browser.maximizeWindow();
  },

  'Testing the Title of the EDMIS main Page' (browser) {

    // Initialize the constant navbar to the page-object navbar
    const navbar = browser.page.navbar();

    // See navbar.js for implementation details of clickAgileCoackingLink method
    navbar
      .navigate()
      .assert.title('EDMIS - Energy Database Management and Information System | Caribbean Energy Management');
    },

  'Testing the Title of the "About" section' (browser) {

    // Initialize the constant navbar to the page-object navbar
    const navbar = browser.page.navbar();

    // See navbar.js for implementation details of clickAgileCoackingLink method
    navbar
      .navigate()
      .clickAboutSectionLink()
      .assert.urlEquals('http://edmis.utechsapna.com/#section2')
  },


  // Close the browser after test completion, failure or timeout
  after(browser) {
    browser.end();
  }
}