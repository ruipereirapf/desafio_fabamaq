/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import signup_PO from "../page_objects/signuppage_PO";

const signup_page = new signup_PO();

When(`I validate that im on the sign up page`, () => {
    signup_page.validate_signin_page();
})

When(`I type the name on the name field`, () => {
    signup_page.type_name();
})

When('I validate that all the signup fields are visible', () => {
    signup_page.validate_if_signup_fields_are_visible();
})

When(`I type the email on the email field`, () => {
    signup_page.type_valid_email();
})

When(`I type the password on the password field`, () => {
    signup_page.type_valid_password();
})

When(`I click on the create account button`, () => {
    signup_page.click_create_acc_button();
})

Then(`I should be presented successful message`, () => {
    signup_page.successful_acc_created();
    signup_page.write_data_to_file();
})

When(`I should receive a confirmation email`, () => {
    signup_page.confirmation_email();
})

When(`I type an already registered email on the email field`,() => {
    signup_page.type_repeated_email();
})

Then(`I should be presented with a error message {string}`, () => {
    signup_page.email_already_in_use_message();
})