const helper = require("protractor-helper");
const Navigation = require("../pages/navigation");

describe('Yandex navigation', () => {

    const navigation = new Navigation();

    beforeEach(() => {

        browser.get('https://yandex.by');
    });

    it('Navigate to Ya video', () => {
        navigation.gotovideo();
    });
    it('Navigate to Ya images', () => {
        navigation.gotoimages();
    });
    it('Navigate to Ya news', () => {
        navigation.gotonews();
    });
    it('Navigate to Ya maps', () => {
        navigation.gotomaps();
    });
    it('Navigate to Ya market', () => {
        navigation.gotomarket();
    });
    it('Navigate to Ya translator', () => {
        navigation.gototranslator();
    });
    it('Navigate to Ya music', () => {
        navigation.gotomusic();
    });


    
});