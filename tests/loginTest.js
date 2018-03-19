/**
 * Each test file may should be considered as a test suite and may contain one or * test cases. The 'beforeEach' hook may be used to run sections of code/logic before the indifivual tests
 * 
 */

//Export the entire file to ensure it is found my nightwatch
export default {

  /**
   * Nightwatch functions generally take a browser parameter to interact with the browser
  */
  before(browser) {
    browser.maximizeWindow();
  },

  'Verify that a user cannot login with no input' (browser) {

    // Initialize the constant loginPage to the page-object login
    const loginPage = browser.page.login();

    loginPage
      .navigate()
      .loginWithNoInputs()
    },
    'Verify that a user cannot login with invalid input' (browser) {
     // Initialize the constant loginPage to the page-object login
    const loginPage = browser.page.login();      
      loginPage
            .navigate()
            .loginWithInvalidInputs()
    },
    'Verify that a user can login with valid input' (browser) {
      // Initialize the constant loginPage to the page-object login
     const loginPage = browser.page.login();      
       loginPage
             .navigate()
             .loginWithValidInputs()
     },

  // Close the browser after test completion, failure or timeout
  after(browser) {
    browser.end();
  }
}