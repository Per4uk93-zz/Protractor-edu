var locationPage = function(){
    
    var townLink = element(by.css('.geolink__reg'));
    var input = element(by.css('.input__control'));
    var checkboX = element(by.css('.checkbox__control'));
    var region = element(by.css('.b-autocomplete-item_js_inited:nth-of-type(1) .b-autocomplete-item__reg'));

    function waitForElement(elem, waitTimeoutMilliseconds){
        return browser.wait(function() { return elem.isPresent(); }, waitTimeoutMilliseconds)
        .then(function(){
           return browser.wait(function() { return elem.isDisplayed(); }, waitTimeoutMilliseconds);
        });
    };

    this.GotoLocation = function(){
        townLink.click();
    };

    this.disableAutoSearch = function(){
        checkboX.click();
    };

    this.enterCity = function(city){
        input.clear();
        input.sendKeys(city);

        browser.sleep(5000);

        var isDisplayed = waitForElement(region,10000);
        
        
            if (isDisplayed) {

                region.click();
            
            } else {

                browser.actions().sendKeys(protractor.Key.ENTER).perform();  

          }  
    };
};

module.exports = new locationPage();