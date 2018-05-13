const helper = require("protractor-helper");

class MailPage{
	constructor(){

		this.enteringbutton = element(by.css('.desk-notif-card__login-enter-expanded'));
		this.container = element(by.css('.passport-Domik_mode_addingAccount'));

		this.username = this.container.element(by.css('[type="text"]'));
		this.password = this.container.element(by.css('[type="password"]'));
		this.submitbutton = this.container.element(by.css('[type="submit"]'));

		this.mailUser = element(by.css('.mail-User-Name'));
		this.avatar = element(by.css('[data-id="recipient-1"]'));
		this.logout = element(by.css('.b-mail-dropdown__item:nth-of-type(8) .b-mail-dropdown__item__content'));
		this.anotherAccount = element(by.css('[data-metrics="Клик на Другой аккаунт"]'));
		this.errorMessage = element(by.css('.passport-Domik_mode_addingAccount > div:nth-child(2)'));
		
		
	}

	gotomail(){

		helper.clickWhenClickable(this.enteringbutton);

		
		 
	}

	fillWithDataAndSubmit(data){

		helper.fillFieldWithTextWhenVisible(this.username, data.name, 7000);
		helper.fillFieldWithTextWhenVisible(this.password, data.pass);
		helper.clickWhenClickable(this.submitbutton);
	}
		 
	checkUser(){
		 
		helper.waitForElementVisibility(this.mailUser, 10000);
	}

	logoutfromMail(){

		helper.clickWhenClickable(this.avatar);
		helper.clickWhenClickable(this.logout);
		helper.waitForElementVisibility(this.enteringbutton);
	}

	otherAccount(){

		helper.clickWhenClickable(this.anotherAccount);
	}

	passwordError(){

		helper.waitForElementVisibility(this.errorMessage);

		expect(this.errorMessage.getText()).toEqual('Неверный пароль');
	}

	usernameError(){

		helper.waitForElementVisibility(this.errorMessage);

		expect(this.errorMessage.getText()).toEqual('Такого аккаунта нет');
	}
}

module.exports = MailPage;