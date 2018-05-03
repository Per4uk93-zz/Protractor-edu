var locationPage = require('../pages/location_page.js');
var mainPage = require('../pages/main_page');
//var mainPageParis = require('../pages/main_page_Paris');

describe('test pull 1', function(){

    it('compare data for London and Paris', function(){

        locationPage.GotoLocation();
        locationPage.enterCity('Лондон');

        mainPage.confirmLocationUK();
        mainPage.pullDatafromTabUK().then(() => {

            
        locationPage.GotoLocation();
        locationPage.enterCity('Париж');

        mainPage.confirmLocationFR();
        mainPage.pullDatafromTabFR().then(() =>{

            mainPage.compareData();

            });

        });

        /*locationPage.GotoLocation();
        locationPage.enterCity('Париж');

        mainPage.confirmLocationFR();
        mainPage.pullDatafromTabFR();*/

        //mainPage.compareData();
        
        


       






    });
    
});