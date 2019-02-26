const assert = require('assert');
var WelcomeToJobs = require('../pageobjects/welcome_to_jobs.page');
var JobDescription = require('../pageobjects/job_description.page');

const offerNumber = '5';
const errorStatusExpected = '404';
const jobDescriptionTitleExpected = 'Company details';
const titleHomePageExpected = 'Jobs Fabrik | Jobs offers list';
const titlePageNotFound = 'Jobs Fabrik | Page not found';

describe('Welcome to jobs fabrik page', () => {
    it('should allow user to see all jobs with pictures, company names and locations', () => {
        welcomePage = new WelcomeToJobs();
        welcomePage.open('/');
        welcomePage.waitForWelcomePageToLoad();
        var titleHomePage = browser.getTitle();
        assert.equal(titleHomePage, titleHomePageExpected);
      
        var companies= welcomePage.getCompanies();
        var images = welcomePage.getImages();     
        var locations = welcomePage.getLocations(); 

        const companiesLength = companies.length;
        const imagesLength = images.length;
        const locationsLength = locations.length;

        assert.equal(companiesLength, offerNumber);
        assert.equal(imagesLength, offerNumber);
        assert.equal(locationsLength, offerNumber);

        for (var i = 0; i < offerNumber; i++) {
            
            assert.notEqual(companies[i], null);
            assert.notEqual(images[i], null)
            assert.notEqual(locations[i], null)
        }
    });
    it('should allow user to see the job details', () => {
        jobDescription = new JobDescription();
        job = welcomePage.getJobOffer();
        job.click()
        jobDescriptionTitle = jobDescription.getJobDetailsTitle();
        assert.equal(jobDescriptionTitle.getText(), jobDescriptionTitleExpected)
    });
    it('should allow user to go back', () => {
        var backButton = jobDescription.getBackButton();
        backButton.click()
        var titleHomePage = browser.getTitle();
        assert.equal(titleHomePage, titleHomePageExpected);
    });
    it('should show the error for unknown url', () => {
        browser.url('/foo');
        var title = browser.getTitle();
        assert.equal(title, titlePageNotFound);
        var errorMessageDisplaeyed = $('h1');
        assert.notEqual( errorMessageDisplaeyed , null);
        assert.equal(errorMessageDisplaeyed.getText(), errorStatusExpected)
    });
});