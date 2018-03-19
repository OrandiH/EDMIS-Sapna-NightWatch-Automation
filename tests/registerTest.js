
export default{

    before(browser) {
        browser.maximizeWindow();
      },  
        'Verify that a user cannot register without entering any input' (browser) {
            // Initialize the constant registerPage to the page-object register
            const registerPage = browser.page.register();

            registerPage
                .navigate()
                .clickCreateAccountBtnNoInput()
        },
        'Verify that a user can register with valid input' (browser) {
          // Initialize the constant registerPage to the page-object register
          const registerPage = browser.page.register();

          registerPage
              .navigate()
              .registerWithValidInput()
      },
          // Close the browser after test completion, failure or timeout
  after(browser) {
    browser.end();
  }

}