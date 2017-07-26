describe('Mocha using nightwatch', function () {
    it('Verify Page Title', function(browser) {
        const home = browser.page.welcome();
        home
            .navigate()
            .assert.containsText('@titleHeading', "Your Business Deserves —")
            .assert.containsText('@titleDescription',"High Quality")
    });
});

after(function (client, done) {
  client.end(function () {
    done();
  });
});