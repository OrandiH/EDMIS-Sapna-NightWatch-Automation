describe('Home Page Banner', function () {
    it('Should have correct message', function(browser) {
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