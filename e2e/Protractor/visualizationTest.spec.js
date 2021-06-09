
var path = require("path");
const { browser, element, ProtractorExpectedConditions, Browser, ExpectedConditions } = require("protractor");
const { BrowserStack } = require("protractor/built/driverProviders");



describe("long asynchronous specs", function () {

    beforeEach(function () {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;
    });
    // checking for title of webpage 
    it('should have a title', function () {
        browser.get('http://localhost:4200/edit/visualization');
        console.log(browser.getTitle());
        expect(browser.getTitle()).toEqual('Proj3Cvt');
    });




});