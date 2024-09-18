/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login_PO from "../page_objects/loginpage_PO";

const login_page = new login_PO();

When(`I type the email to login`, () =>{
    login_page.type_email_to_login();
})

When(`I type the password to login`, () =>{
    login_page.type_password_to_login();
})

When(`I click on the confirm login button`, () =>{
    login_page.click_login_button();
})

Then(`I should be presented with a successful login message`, () =>{
    login_page.successful_login_message();
})