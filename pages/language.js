const helper = require("protractor-helper");

class Language{
    constructor(){

        this.langlist = element(by.css('.b-langs .dropdown-menu__switcher'));
        this.currentlang = element(by.css('.link__inner span'));
        this.content = element(by.css('.popup_visibility_visible .popup__content'));
        this.moreLang = element(by.css('.b-menu__layout-vert-cell_position_last'));
        this.dropdown = element(by.css('.button_arrow_down'));
        this.langforselecting = element(by.css('.select__list .select__item:nth-of-type(6) .select__text'));
        this.savebutton = element(by.css('[type="submit"]'));
    }

    checkcurrentlangAndselectanother(){

        expect(this.currentlang.getText()).toEqual('Rus');
        helper.clickWhenClickable(this.langlist);
        helper.waitForTextNotToBePresentInElement(this.content, 'Eng');
        helper.clickWhenClickable(this.moreLang);
        
    }

    changelanguage(){

        helper.clickWhenClickable(this.dropdown);
        helper.clickWhenClickable(this.langforselecting, 7000);
        expect(this.dropdown.getText()).toEqual('English');
        helper.clickWhenClickable(this.savebutton);
    }

    checklanguage(){

        helper.waitForElementVisibility(this.currentlang);
        expect(this.currentlang.getText()).toEqual('Eng');
    }
}

module.exports = Language;