'use strict'
var Page = require('./page');
const NUM = '5';

class WelcomeToJobs extends Page {

    /**
    * define elements
    */

    get title()       { return $('h1*=Welcome'); }
    get companies ()  { return $$('span strong'); }
    get locations ()  { return $$('a[aria-current="false"] div span div div span'); } // gets location + campany names
    get images ()     { return $$('img'); }
    get jobOffer ()   { return $('a[aria-current="false"] div span'); } 

    /**
    * define or overwrite page methods
    */
   
    open (path) {

        super.open(path)     
     }

    /**
    * your page specific methods
    */

    getCompanies(){
        var coms = []
        for (var i = 0; i < NUM; i++) {
            coms.push(this.companies[i].getText());
        }
        return coms
    }

    getImages(){
        var imgs = []
        for (var i = 0; i < NUM; i++) {
            imgs.push(this.images[i].getAttribute('src'));
        }
        return imgs
    }

    getLocations(){
        var locs = []
        for (var i = 0; i < NUM; i++) {
            locs.push(this.locations[i].getText()); 
        }
        return locs
    }

    getJobOffer(){

        return this.jobOffer;
    }

    waitForWelcomePageToLoad () {
        if(!this.title.isDisplayed()){
        this.title.waitForDisplayed(5000);
        }
    }
}

module.exports = WelcomeToJobs