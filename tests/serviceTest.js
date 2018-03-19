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
    
      'Verify that a user can view the menu dropdown' (browser) {
    
        // Initialize the constant loginPage to the page-object login
        const servicePage = browser.page.service();
    
        servicePage
          .navigate()
          .clickMenuBtn()
        },
        'Verify that a user can click the add service button' (browser) {
         // Initialize the constant loginPage to the page-object login
        const servicePage = browser.page.service();      
          servicePage
                .navigate()
                .clickAddSericeBtn()
        },
    
      // Close the browser after test completion, failure or timeout
      after(browser) {
        browser.end();
      }
    }