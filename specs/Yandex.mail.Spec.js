const helper = require("protractor-helper");
const MailPage = require("../pages/mailPage");

describe('Yandex mail', () => {

    const mailpage = new MailPage();

    beforeEach(() => {

        browser.get('https://yandex.by'); 
        
    });


    it('login / log out to / from the Ya mail', () => {

        const data = {
            name: "AutotestUser",
            pass: "AutotestUser123"
        };

        mailpage.gotomail();
        mailpage.fillWithDataAndSubmit(data);
        mailpage.checkUser();
        mailpage.logoutfromMail();

    });

    it('login with wrong password', () => {

        const data = {
            name: "AutotestUser",
            pass: "NoAutotestUser123"
        };

        mailpage.gotomail();
        mailpage.otherAccount();
        mailpage.fillWithDataAndSubmit(data);
        mailpage.passwordError();

        browser.sleep(10000);

    });

    it('login with wrong username', () => {

        const data = {
            name: "NoAutotestUser",
            pass: "AutotestUser123"
        };

        mailpage.gotomail();
        mailpage.otherAccount();
        mailpage.fillWithDataAndSubmit(data);
        mailpage.usernameError();

    });
    
});
