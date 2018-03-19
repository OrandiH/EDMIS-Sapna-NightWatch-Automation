import registerData from "../data/registerData.js"

// Define page elements in the object below
const elements = {
    // XPath Selectors
    trnField : {selector:'//*[@id="TRN"]',locateStrategy:'xpath'},
    emailField : {selector:'//*[@id="Email"]',locateStrategy:'xpath'},
    passwordField : {selector:'//*[@id="Password"]',locateStrategy:'xpath'},
    confirmPasswordField : {selector:'//*[@id="ConfirmPassword"]',locateStrategy:'xpath'},
    trnErr:{selector:'//*[@id="signup-form"]/form/div[1]/ul/li[1]',locateStrategy:'xpath'},
    emailErr:{selector:'//*[@id="signup-form"]/form/div[1]/ul/li[2]',locateStrategy:'xpath'},
    passwordErr:{selector:'//*[@id="signup-form"]/form/div[1]/ul/li[3]',locateStrategy:'xpath'},
    confirmPasswordErr :{selector:'//*[@id="signup-form"]/form/div[1]/ul/li[4]',locateStrategy:'xpath'},
    accountBtn : {selector:'//*[@id="signup-form"]/form/input[2]',locateStrategy:'xpath'}
}

const commands = {
    
    clickCreateAccountBtnNoInput(){

        return this
        .moveToElement('@accountBtn',20,20)
        .waitThenClick('@accountBtn','The Create Account button was clicked!')
        .waitForElementVisible('@trnErr','The TRN error is visible')
        .waitForElementVisible('@emailErr','The email error is visible')
        .waitForElementVisible('@passwordErr','The password error is visible')
        .waitForElementVisible('@confirmPasswordErr','The confirm password error is visible')
        .api.pause(2000);
    },
    registerWithValidInput(){

        return this
        .waitThenSetValue('@trnField',registerData.trn,'The TRN field is visible and a valid TRN was entered')
        .waitThenSetValue('@emailField',registerData.email,'The email field is visible and valid email was entered')
        .waitThenSetValue('@passwordField',registerData.password,'The password field is visible and a valid password was entered')
        .waitThenSetValue('@confirmPasswordField',registerData.password,'The confirm password field is visible and a valid password was entered')
        .waitThenClick('@accountBtn','The Create Account button was clicked!')
        .api.pause(2000);
    }

}

/**
 * Export the elements so that they are accessible to nightwatch
 */
export default {
    elements: elements,
    commands: [commands],
    url: "https://mlgcd.utechsapna.com/account/register"
}