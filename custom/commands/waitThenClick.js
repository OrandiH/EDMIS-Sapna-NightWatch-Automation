/**
 * waitedClick uses the globally defined wait value then sets value of form element
 * 
 * @param {string} selector
 *
 */

export function command(selector, message, time = this.globals.waitForConditionTimeout) {
  return this
    .waitForElementVisible(selector, time, message)
    .click(selector);
};