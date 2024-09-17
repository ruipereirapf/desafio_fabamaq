/// <reference types="cypress" />
require('cypress-xpath')

class homepage_PO {
    elements = {
        signup_button : () => cy.xpath(/*'path to signup button'*/),
        login_button : () => cy.xpath(/*'path to login button'*/)
    }

    click_signup_button(){
        this.elements.signup_button().click();
    }

    click_login_button(){
        this.elements.login_button().click();
    }
}
export default homepage_PO;