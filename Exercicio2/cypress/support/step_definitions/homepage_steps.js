/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage_PO from "../page_objects/homepage_PO";

const homepage_page = new homepage_PO();

Given(`I navigate to the onlineStore homepage`, () =>{
    homepage_page.navigate();
})

When(`I click on the sign up button`, () => {
    homepage_page.click_signup_button();
})

When('I click on the login button', () => {
    homepage_page.click_login_button();
})