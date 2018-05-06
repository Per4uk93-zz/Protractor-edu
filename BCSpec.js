describe('basic controls', function(){

    var checkboxYA = element(by.css('[data-autotest-id="onstock"] ._1gAodJU0Dw'));
    var checkbox = element(by.css('[data-autotest-id="onstock"] [type=checkbox]'));
    var radioButton = element(by.css('._3HH8SRnp4A ._2gBbJONjvk:nth-of-type(4) [type=radio]'));
    var AnotherRadio = element(by.css('._3RxxCpjiKz ._27kJ3ORjYr'));
    var input = element(by.css('.lih4lXS8EN ._3E2Wzu8o3H:nth-of-type(1) [type=text]'));
    var scrollElement = element(by.css('.n-pager__button-next'));
    var dropdown = element(by.css('.button_theme_normal'));
    var dropdownValue = element(by.css('.select__list .select__item:nth-of-type(1) .select__text'));
    
    beforeEach(() => {

        browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
        
    });
   

    it('check/uncheck checkbox', function(){

        expect(checkbox.isSelected()).toBe(true);

        checkboxYA.click();

        expect(checkbox.isSelected()).toBe(false);

    });
    
    it('check radio button', function(){

        expect(radioButton.isSelected()).toBe(true);

        AnotherRadio.click();

        expect(radioButton.isSelected()).toBe(false);

        browser.sleep(5000);

    });

    it('select value from input', function(){

        input.sendKeys('1000');

        expect(input.getAttribute('value')).toEqual('1000');

    });

    it('select value from dropdown', function(){

        dropdown.click();

        dropdownValue.isDisplayed().then(function(){

            dropdownValue.click();

            browser.sleep(5000);


        });
    });

    it('scroll', function(){

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            scrollElement.click();

        });
    }); 
});