/// <reference types="cypress" />
require('cypress-xpath')

class login_PO {
    elements = {
        login_email_textField : () => cy.xpath(/*'path to login email text field'*/),
        login_password_textField : () => cy.xpath(/*'path to login password text field'*/),
        login_button : () => cy.xpath(/*'path to login button'*/),
        successful_login_header : () => cy.xpath(/*'path to header confirming successful login'*/)
    }

    type_email_to_login(){
        cy.fixture('data_mock.json').then((data) => {
            this.elements.login_email_textField().type(data.email);
        })   
    }

    type_password_to_login(){
        cy.fixture('data_mock.json').then((data) => {
            this.elements.login_password_textField().type(data.password);
        })   
    }

    click_login_button(){
        this.elements.login_button().click();
    }

    successful_login_message(){
        this.elements.successful_login_header().contains('Login Successful!');
    }
}
export default login_PO;