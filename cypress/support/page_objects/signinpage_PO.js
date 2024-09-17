/// <reference types="cypress" />
require('cypress-xpath')

import { faker } from '@faker-js/faker';

class signin_PO {
    elements = {
        signup_header : () => cy.xpath(/*'path to signup header'*/),
        name_textField : () => cy.xpath(/*'path to name text field'*/),
        email_textField : () => cy.xpath(/*'path to email text field'*/),
        password_textField : () => cy.xpath(/*'path to password text field'*/),
        create_acc_button : () => cy.xpath(/*'path to create account button'*/),
        successful_acc_created_header : () => cy.xpath(/*path to header to confirm successfulness of created acc*/)
    }

    random_email= '';

    validate_signin_page(){
        this.elements.signup_header().contains('Create Account');
    }

    type_name(random_name = faker.person.firstname()){
        this.elements.name_textField().type(random_name);
    }

    type_email(random_email = faker.internet.email()){
        this.elements.email_textField().type(random_email);
    }

    type_password(random_password = faker.internet.password()){
        this.elements.password_textField().type(random_password);
    }

    click_create_acc_button(){
        this.elements.create_acc_button().click();
    }

    successful_acc_created(){
        this.elements.successful_acc_created_header.contains('Account Created Successfully.');
    }

    confirmation_email(){
        /// MISSING THIS DONT FORGET
    }

    type_invalid_email(){
        this.elements.email_textField().type(this.random_email);
    }


}
export default signin_PO;