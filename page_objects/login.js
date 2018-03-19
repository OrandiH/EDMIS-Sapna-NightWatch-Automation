 import accountData from "../data/loginData.js"

// Define page elements in the object below
const elements = {

    // XPath Selectors
    loginButton : {selector:'//*[@id="login-form"]/form/input[2]',locateStrategy: 'xpath'},
    emailField :{selector:'//*[@id="Email"]',locateStrategy:'xpath'},
    passwordField : {selector:'//*[@id="Password"]',locateStrategy:'xpath'},
    emailError:{selector:'//*[@id="login-form"]/form/div[1]/span',locateStrategy:'xpath'},
    passwordError:{selector:'//*[@id="Password-error"]',locateStrategy:'xpath'},
    invalidError:{selector:'//*[@id="login-form"]/form/div[1]/ul/li',locateStrategy:'xpath'}
  
}

const commands = {
	loginWithNoInputs(){
		// Return this from page-object methods to allow chaining of commands
    return this

        //Use the custom command to wait for an element to be visible then click it
        .moveToElement('@loginButton',20,20)
        .waitThenClick('@loginButton', 'The Log in button was clicked')
        .waitForElementVisible('@emailError','Email error is visible')
        .waitForElementVisible('@passwordError','Password error is visible')
        .api.pause(3000);
	},

	loginWithInvalidInputs(){
        	// Return this from page-object methods to allow chaining of commands
		return this
        .waitThenSetValue('@emailField',accountData.invalidEmail,'The email field is visible and invalid email was entered')
        .waitThenSetValue('@passwordField',accountData.invalidPassword,'The password field is visible and invalid password was entered')
        .waitThenClick('@loginButton', 'The Log in button was clicked')
        .waitForElementVisible('@invalidError','The invalid login error message is visible!')
        .api.pause(3000);
       
    },
    
    loginWithValidInputs(){
        return this
        .waitThenSetValue('@emailField',accountData.email,'The email field is visible and a valid email entered!')
        .waitThenSetValue('@passwordField',accountData.password,'The password field is visible and a valid password entered!')
        .waitThenClick('@loginButton','The Log in button was clicked')
        .assert.urlEquals('https://mlgcd.utechsapna.com/customer','The correct url of https://mlgcd.utechsapna.com/customer was loaded!')
        .api.pause(3000);
    }

}

/**
 * Export the elements so that they are accessible to nightwatch
 */
export default {
    elements: elements,
    commands: [commands],
    url: "https://mlgcd.utechsapna.com/"
}