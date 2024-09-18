/// <reference types="cypress" />
require('cypress-xpath')

import { faker } from '@faker-js/faker';

const existent_email = 'existentmail@mail.com';

class signup_PO {
    elements = {
        signup_header : () => cy.xpath(/*'path to signup header'*/),
        name_textField : () => cy.xpath(/*'path to name text field'*/),
        email_textField : () => cy.xpath(/*'path to email text field'*/),
        password_textField : () => cy.xpath(/*'path to password text field'*/),
        create_acc_button : () => cy.xpath(/*'path to create account button'*/),
        successful_acc_created_header : () => cy.xpath(/*'path to header to confirm successfulness of created acc'*/),
        email_in_use_error_message : () => cy.xpath(/*'path to where the error message appears'*/)
    }

    validate_signin_page() {
        this.elements.signup_header().contains('Create Account');
    }

    validate_if_signup_fields_are_visible(){
        this.elements.name_textField().should('be.visible');
        this.elements.email_textField().should('be.visible');
        this.elements.password_textField().should('be.visible');
    }

    type_name(random_name = faker.person.firstName()) {
        this.elements.name_textField().type(random_name);
    }

    type_valid_email(random_email = faker.internet.email()) {
        this.elements.email_textField().type(random_email);
        cy.readFile('cypress/fixtures/data_mock.json').then((data) => {
            cy.writeFile('cypress/fixtures/data_mock.json', { ...data, email: random_email });
        });
    }

    type_repeated_email() {
        this.elements.email_textField().type(existent_email);
    }

    type_valid_password(random_password = faker.internet.password()) {
        this.elements.password_textField().type(random_password);
        cy.readFile('cypress/fixtures/data_mock.json').then((data) => {
            cy.writeFile('cypress/fixtures/data_mock.json', { ...data, password: random_password });
        });
    }

    click_create_acc_button() {
        this.elements.create_acc_button().click();
    }

    successful_acc_created() {
        this.elements.successful_acc_created_header().contains('Account Created Successfully.');
    }

    confirmation_email() {
        /*
        Navigate to email site
        Login with account credentials
        Validate confirmation email
        Open email and confirm email
        */
    }

    email_already_in_use_message() {
        this.elements.email_in_use_error_message().should('be.visible');
        this.elements.email_in_use_error_message().contains('Email Already in Use.');
    }
}
export default signup_PO;