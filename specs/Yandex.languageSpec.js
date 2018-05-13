const helper = require("protractor-helper");
const Language = require("../pages/language");

describe('Switch language to English', () => {

    const language = new Language();

    browser.get('https://yandex.by');

    it('Check and change language', () => {

        language.checkcurrentlangAndselectanother();
        language.changelanguage();
        language.checklanguage();
        
    });
  
});