'use strict'
var Page = require('./page');

class JobDescription extends Page {

    /**
    * define elements
    */

    get jobDetailsTitle ()  { return $('h2*=details'); } 
    get backButton ()       { return $('span=Back'); } 
    
    /**
    * define or overwrite page methods
    */
    open (path) {

        super.open(path)   

    }

    /**
    * your page specific methods
    */

    getJobDetailsTitle(){

       return this.jobDetailsTitle;

    }

    getBackButton(){

        return this.backButton;
 
     }

}

module.exports = JobDescription