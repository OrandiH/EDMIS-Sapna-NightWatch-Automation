import accountData from "../data/loginData.js"
// Define page elements in the object below
const elements = {
     // XPath Selectors
    menuBtn : {selector:'//*[@id="menubar-toggle-btn"]/span[2]',locateStrategy:'xpath'},
    addServiceBtn : {selector:'//*[@id="menubar"]/div/div/ul/li[3]/a/span',locateStrategy:'xpath'},
    loginButton : {selector:'//*[@id="login-form"]/form/input[2]',locateStrategy: 'xpath'},
    emailField :{selector:'//*[@id="Email"]',locateStrategy:'xpath'},
    passwordField : {selector:'//*[@id="Password"]',locateStrategy:'xpath'}
}

const commands = {
    clickMenuBtn(){
        return this
        .waitThenSetValue('@emailField',accountData.email,'The email field is visible and a valid email entered!')
        .waitThenSetValue('@passwordField',accountData.password,'The password field is visible and a valid password entered!')
        .waitThenClick('@loginButton','The Log in button was clicked')
        .assert.urlEquals('https://mlgcd.utechsapna.com/customer','The correct url of https://mlgcd.utechsapna.com/customer was loaded!')
        .waitThenClick('@menuBtn','The menu button was clicked!')
        .api.pause(2000);
    },
    clickAddSericeBtn(){
        return this
        .waitThenClick('@menuBtn','The menu button was clicked!')
        .waitThenClick('@addServiceBtn','The add service button was clicked!')
        .assert.urlEquals('https://mlgcd.utechsapna.com/customer/dashboard/addlicense','The correct url of https://mlgcd.utechsapna.com/customer/dashboard/addlicense was loaded!')
        .api.pause(2000)
    }

}

/**
 * Export the elements so that they are accessible to nightwatch
 */
export default {
    elements: elements,
    commands: [commands],
    url: "https://mlgcd.utechsapna.com/customer"
}