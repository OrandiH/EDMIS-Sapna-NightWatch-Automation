  # EDMIS automation project using NightWatch

***

### Getting Started

Clone automation repo repository:
```
$ git clone <automation_repo>
$ cd <automation_repo>
$ npm install
```

### Environment
Ensure that the following are installed and available on your path.  
**Java  
node.js   
npm**


** Note: ** Ensure ** Firefox v45.0.2 ** or ** higher ** is installed.  
** Note: ** Ensure ** Google Chrome is installed

### Running Tests
Running all the tests
```sh
$ npm test
```
Running test groups
```sh
$ npm run group admin
```
Running a single test file
```sh
npm run spec ./tests/contestant/email.test.js
```
Running mocha tests
```sh
$ node_modules/.bin/nightwatch --env mocha
```

### How to Setup Nightwatch for Behavior-Driven Development

Taken from [nightwatchjs.org/guide#using-mocha](http://nightwatchjs.org/guide#using-mocha)

Starting with version 0.8 Nightwatch is bundled with a custom version of the popular Mocha test runner which allows running tests using Mocha, thus taking advantage of its interfaces and reporters.

Usage

There are two main ways in which you can use Mocha with Nightwatch.

Mocha is used as an alternative test runner to the built-in one. This is done by specifying the "test_runner" option in the nightwatch.json configuration file.

Custom options can also be specified for Mocha:

```
{
  ...
  "test_runner" : {
    "type" : "mocha",
    "options" : {
      "ui" : "bdd",
      "reporter" : "list"
    }
  }
  ...
}
```
---

**The test_runner option can also be specified at test environment level(used in this project):**

```
{
  "test_settings" : {
    "mocha_tests" : {
      "test_runner" : {
        "type" : "mocha",
        "options" : {
          "ui" : "bdd",
          "reporter" : "list"
        }
      }
    }
  }
  ...
}
```

### Git Workflow 

```

                     +----------------+
              +------> featurebranch-1 +-----------+ (pull request)
              |      +----------------+            |
              |                                    |
  +--------+  |                                    +---------+
  | master + -                                     |  master |
  +----+---+  |                                    +---------+  
              |                                    |
              |      +-----------------+           |            
              +------> featurebranch-2 +-----------+  (pull request)
                    +------------------+
```


When working on a new feature:

1. Create a new branch that branches off the `master` branch.
2. Complete the feature/work and submit a pull request to be merged into `master`.

### Page Objects

#### Creating Page Objects

Elements should be defined in the **elements object**

```js
// Selectors
const elements = {
  txtUsername      : { selector: 'input[name="username"]'},
  txtPassword      : { selector: 'input[name="password"]'},
};
```

Page object template

```js
/**
*
*/
const elements = {
};

const commands = {
};

export default {
  url: function () { return `${this.api.launchUrl}[route_name]`; },
  commands: [commands],
  elements: elements
};
```



#### Finding Selectors

* `ID`'s are best to use as selectors.
* Xpath can be used where complexity is a concern
* Luckily there is [CSS 3 selectors](http://www.w3schools.com/cssref/trysel.asp?selector=[id*=s]) which makes life easier
* Most components will have an unique identifier in class name (use contains with xpath or css) :white_check_mark:

##### Using Xpath

```js
// very bad
const elements = {
  scheduleContainer : { selector: './/*[@class="node_modules--diamondla-dcg-shared-react-lib-components-LiveSchedule-___LiveSchedule__scheduleContainer___3q6We', locateStrategy:'xpath'}
};

// good
const elements = {
   scheduleContainer : { selector: '//div[contains(@class, "scheduleContainer")]', locateStrategy: 'xpath'} 
};
```

##### Using CSS 3

```js
// very bad
const elements = {
  headLine : { selector: 'h2[class="src-app-themes-___LiveSchedule__headline___3yUlj node_modules--diamondla-dcg-shared-react-lib-components-LiveSchedule-___LiveSchedule__headline___3VZBr node_modules--diamondla-dcg-shared-react-lib-stylesheets-___objects-isolation__component___bLyEg node_modules--diamondla-dcg-shared-react-lib-stylesheets-___objects-isolation__reset___38kVl"]'}
};

// good
const elements = {
   headLine : { selector: 'h2[class*="headline"]'} 
};
```

#### Custom Commands

```js
/**
 * Use to switch between windows/tabs
 */
export function command(tab) {
  return this
    .window_handles(function (result) {
      const newHandle = result.value[tab];
      this.switchWindow(newHandle);
    });
};

```

Where applicable, use `sections` to easily provide element-level nesting. For example for to represent a complex parent-child relationship.(e.g menus)

An example of how `sections` can be used:

```js
module.exports = {
  sections: {
    menu: {
      selector: '#menu',
      elements: {
        change.password: {
          selector: '#change_password'
        },
        logout: {
          selector: '#logout'
        }
      }
    }
  }
};
```
____

#### Node dependencies
* babel-core 
* babel-preset-es2015 babel-register 
* babel-plugin-add-module-exports 
* chalk 
* chromedriver 
* nightwatch 
* faker
* chance
* selenium-server-standalone-jar