var mainPage = function(){

    var London;
    var Paris;
    var moreSwitcher = element(by.css('.home-tabs__more-switcher'));
    var moreTab = element(by.css('.home-tabs__more'));

    function waitForElement(elem, waitTimeoutMilliseconds){
        return browser.wait(function() { return elem.isPresent(); }, waitTimeoutMilliseconds)
        .then(function(){
           return browser.wait(function() { return elem.isDisplayed(); }, waitTimeoutMilliseconds);
        });
    };

    this.confirmLocationUK = function(){
        var countryUK = element(by.linkText('в Великобритании'));
            waitForElement(countryUK, 5000);
    };

    /*this.pullDatafromTabUK = function(){
            moreSwitcher.click();
                waitForElement(moreTab, 1000);
                     moreTab.getText().then(function(textUK){

             London = (textUK);    
        });
    };*/
    this.pullDatafromTabUK = function () {
        return new Promise(function(resolve, reject) {  
       moreSwitcher.click();
       waitForElement(moreTab, 1000);
       moreTab.getText().then(function(textUK){
      
        London = (textUK);
        resolve();
       });
        });
      }

    this.confirmLocationFR = function(){
        var countryFR = element(by.linkText('во Франции'));
            waitForElement(countryFR, 5000);
    };

   /* this.pullDatafromTabFR = function(){
        moreSwitcher.click();
        waitForElement(moreTab, 1000);
        moreTab.getText().then(function(textFR){

             Paris = (textFR);
        });
    };*/

    this.pullDatafromTabFR = function () {
        return new Promise(function(resolve, reject) {  
       moreSwitcher.click();
       waitForElement(moreTab, 1000);
       moreTab.getText().then(function(textFR){
      
        Paris = (textFR);
        resolve();
       });
        });
      }

    this.compareData = function(){

        var one = London;
        var two = Paris;

        console.log(one == two);
        


        

        



    };




};

module.exports = new mainPage();
    