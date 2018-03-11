
// Define page elements in the object below
const elements = {

  // CSS Selector
  agileCoachingLink: { selector: '#menu-item-211575>a' },
  mobileAndWebTestAutomation: { selector: '#menu-item-211551>a'},
  devOpsConsultancyLink: { selector: '#menu-item-211533>a'},
  // Below are xpath selectors, use css if possible
  aboutSectionLink: { selector: './/*[@id="wrapper"]/header/div/div[2]/div[2]/div/div/nav/ul/li[2]/a', locateStrategy: 'xpath' },
  
}

//Define page object methods in the object below
const commands = {

  clickAboutSectionLink() {

    // Return this from page-object methods to allow chaining of commands
    return this

        //Use the custom command to wait for an element to be visible then click it 
        .waitThenClick('@aboutSectionLink', 'The About link was clicked');
  },

  clickDevOpsConsultancyLink() {
    return this
      .waitForElementVisible('@serviceDropdown', 'Services Dropdown is visible')

      .moveToElement('@serviceDropdown', 10, 10, () => {

        this.waitThenClick('@devOpsConsultancyLink', 'The DevOps Consultancy link was clicked')
      })
  },

  clickMobileAndWebTestAutomation() {

    return this
      .waitForElementVisible('@serviceDropdown', 'Services Dropdown is visible')

      .moveToElement('@serviceDropdown', 10, 10, () => {

        this.waitThenClick('@mobileAndWebTestAutomation', 'The Mobile & Web Test Automation Link was clicked')
      })
  }
}


/**
 * Export the elements and commands so that they are accessible to nightwatch
 */
export default {
  elements: elements,
  commands: [commands],
  url: 'http://edmis.utechsapna.com/'
}