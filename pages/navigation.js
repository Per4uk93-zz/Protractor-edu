const helper = require("protractor-helper");

class Navigation {
    constructor(){

        this.video = element(by.css('.home-tabs__search:nth-of-type(1)'));
        this.images = element(by.css('.home-tabs__search:nth-of-type(2)'));
        this.news = element(by.css('.home-tabs__search:nth-of-type(3)'));
        this.maps = element(by.css('.home-tabs__search:nth-of-type(4)'));
        this.market = element(by.css('.home-tabs__search:nth-of-type(5)'));
        this.translate = element(by.css('.home-tabs__search:nth-of-type(6)'));
        this.music = element(by.css('.home-tabs__search:nth-of-type(7)'));
    }

    gotovideo(){

        helper.clickWhenClickable(this.video);
        helper.waitForUrlToBeEqualToExpectedUrl('https://yandex.by/video/');

    }

    gotoimages(){

        helper.clickWhenClickable(this.images);
        helper.waitForUrlToBeEqualToExpectedUrl('https://yandex.by/images/');

    }

    gotonews(){

        helper.clickWhenClickable(this.news);
        helper.waitForUrlToBeEqualToExpectedUrl('https://news.yandex.by/');
    }

    gotomaps(){

        helper.clickWhenClickable(this.maps);
        helper.waitForUrlToBeEqualToExpectedUrl('https://yandex.by/maps/');
    }

    gotomarket(){

        helper.clickWhenClickable(this.market);
        helper.waitForUrlToBeEqualToExpectedUrl('https://market.yandex.by/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch');
    }

    gototranslator(){

        helper.clickWhenClickable(this.translate);
        helper.waitForUrlToBeEqualToExpectedUrl('https://translate.yandex.by/');
    }

    gotomusic(){

        helper.clickWhenClickable(this.music);
        helper.waitForUrlToBeEqualToExpectedUrl('https://music.yandex.by/home');
    }
}

module.exports = Navigation;