/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import signin_PO from "../page_objects/signinpage_PO";

const signin_page = new signin_PO();

When(`I validate that im on the sign up page`, () => {
    signin_page.validate_signin_page();
})

When(`I type the name on the name field`, () => {
    signin_page.type_name();
})

When(`I type the email on the email field`, () => {
    signin_page.type_email();
})

When(`I type the password on the password field`, () => {
    signin_page.type_password();
})

When(`I click on the create account button`, () => {
    signin_page.click_create_acc_button();
})

Then(`I should be presented successful message`, () => {
    signin_page.successful_acc_created();
})

When(`I should receive a confirmation email`, () => {
    /// MISSING THIS DONT FORGET
})

When(`I type an already registered email on the email field`,() => {
    signin_page.type_invalid_email();
})

Then(`I should be presented with a error message`, () => {

})